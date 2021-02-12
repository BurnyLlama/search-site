function setvar(variable, value) {
    document.documentElement.style
        .setProperty(`--${variable}`, value)
}

document.querySelector("#settings-theme").addEventListener("click", event => {
    const themeSetting = document.querySelector('input[name="theme"]:checked')
    if (!themeSetting) return console.log("Something went wrong while applying the theme.")

    if (themeSetting.value == "light") {
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
})