function setvar(variable, value) {
    document.documentElement.style
        .setProperty(`--${variable}`, value)
}

function loadTheme(theme) {
    if (theme == "light") {
        setvar("surface", "#fafafa")
        setvar("standout", "#fff")
        setvar("text", "#222")
        setvar("shadow", "#8888")
    } else {
        setvar("surface", "#222")
        setvar("standout", "#282828")
        setvar("text", "#fafafa")
        setvar("shadow", "#000a")
    }
}

function getDefaultSettings() {
    return {
        theme: "light",
        searchEngine: "google",
        searchEngineCustomURL: "",
        colors: {
            color1: "#ff4b4b",
            color2: "#4b4bff",
        }
    }
}

export default {
    init: () => {
        document.querySelector("#settings-theme").addEventListener("click", event => {
            const themeSetting = document.querySelector('input[name="theme"]:checked')

            loadTheme(themeSetting.value)
        })

        document.querySelector("#settings-colors").addEventListener("change", () => {
            setvar("color1", document.querySelector("#color1").value)
            setvar("color2", document.querySelector("#color2").value)
        })

        document.querySelector("#settings-save-btn").addEventListener("click", event => {
            const settings = {
                theme: document.querySelector('input[name="theme"]:checked').value,
                searchEngine: document.querySelector('input[name="search-engine"]:checked').value,
                searchEngineCustomURL: document.querySelector("#search-engine-custom-url").value,
                colors: {
                    color1: document.querySelector("#color1").value,
                    color2: document.querySelector("#color2").value
                }
            }

            localStorage.setItem("settings", JSON.stringify(settings))

            window.location.reload()
        })

        document.querySelector("#settings-default-btn").addEventListener("click", event => {
            const settings = getDefaultSettings()
            localStorage.setItem("settings", JSON.stringify(settings))

            window.location.reload()
        })
    },

    loadSettings: () => {
        let settings = JSON.parse(localStorage.getItem("settings"))

        // Default settings if no settings are present.
        if (settings == null)
            settings = getDefaultSettings()

        // Default theme
        if (settings.theme == null)
            settings.theme = "light"

        loadTheme(settings.theme)
        document.querySelector(`#${settings.theme}-theme[name="theme"]`).checked = true

        // Default colors
        if (settings.colors == null)
            settings.colors = {
                color1: "#ff4b4b",
                color2: "#4b4bff",
            }

        document.querySelector("#color1").value = settings.colors.color1
        document.querySelector("#color2").value = settings.colors.color2
        setvar("color1", settings.colors.color1)
        setvar("color2", settings.colors.color2)

        // Default search engine
        if (settings.searchEngine == null)
            searchEngine = "google"

        document.querySelector(`#search-engine-${settings.searchEngine}[name="search-engine"]`).checked = true

        document.querySelector("#search-engine-custom-url").value = settings.searchEngineCustomURL ? settings.searchEngineCustomURL : ""
    }
}