let activePanel = null
const closeBtns = {
    left: document.querySelector("#close-btn-left"),
    right: document.querySelector("#close-btn-right")
}

function openPanel (panel, direction) {
    // Close any previous panels
    closePanel(direction)

    // Open the new one
    direction == "right" ?
        document.querySelector(panel).style.right = "0" :
        document.querySelector(panel).style.left = "0"

    document.querySelector(`#close-btn-${direction}`).style.top = "5vh"

    activePanel = panel
}

function closePanel () {
    if (!activePanel)
        return console.error("No active panel.")

    const panel = document.querySelector(activePanel)

    panel.getAttribute("direction") == "right" ?
        panel.style.right = "-100%" : 
        panel.style.left = "-100%"

    closeBtns.left.style.top = "-100vh"
    closeBtns.right.style.top = "-100vh"
}

export default {
    init: () => {
        document.querySelectorAll(".panel-btn").forEach(button => 
            button.addEventListener("click", _ =>
                openPanel(`#${button.id.split('-')[0]}-panel`, button.getAttribute("direction"))
            )
        )

        document.querySelector("#close-btn-left").addEventListener("click", _ => closePanel())
        document.querySelector("#close-btn-right").addEventListener("click", _ => closePanel())
    }
}