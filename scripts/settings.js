import { closePanel } from "./panels.js";

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

export default {
    init: () => {
        document.querySelector("#settings-theme").addEventListener("click", event => {
            const themeSetting = document.querySelector('input[name="theme"]:checked')

            loadTheme(themeSetting.value)
        })

        document.querySelector("#settings-save-btn").addEventListener("click", event => {
            const settings = {
                theme: document.querySelector('input[name="theme"]:checked').value,
                searchEngine: document.querySelector('input[name="search-engine"]:checked').value,
                searchEngineCustomURL: document.querySelector("#search-engine-custom-url").value
            }

            localStorage.setItem("settings", JSON.stringify(settings))

            closePanel()
            window.location.reload()
        })
    },
    loadSettings: () => {
        const settings = JSON.parse(localStorage.getItem("settings"))

        console.log(settings)

        if (settings == null)
            return console.log("Couldn't load any settings! (There are no settings saved.)")

        if (settings.theme == null)
            return console.log("Couldn't load any settings! (There is no theme in the settings!)")
        loadTheme(settings.theme)
        document.querySelector(`#${settings.theme}-theme[name="theme"]`).checked = true

        if (settings.searchEngine == null)
            return console.log("Couldn't load any settings! (There is search engine theme in the settings!)")
        document.querySelector(`#search-engine-${settings.searchEngine}[name="search-engine"]`).checked = true

        document.querySelector("#search-engine-custom-url").value = settings.searchEngineCustomURL ? settings.searchEngineCustomURL : ""
    }
}