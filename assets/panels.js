document.querySelectorAll(".panel-btn").forEach(button => 
        button.addEventListener("click", _ =>
            openPanel(`#${button.id.split('-')[0]}-panel`, button.getAttribute("direction"))
    )
)

closeBtn = document.querySelector("#close-btn")

closeBtn.addEventListener("click", closePanel)

function openPanel(panel, direction) {
    // Close any previous panels
    activePanel = document.querySelector(`#${closeBtn.getAttribute("activePanel")}`)
    if (activePanel)
        activePanel.style.left = activePanel.getAttribute("direction") == "right" ? "110vw" : "-50vw"

    // Open the new one
    document.querySelector(panel).style.left = direction == "right" ? "60vw" : "0vw"
    closeBtn.style.left = direction == "right" ? "57vw" : "39vw"
    closeBtn.setAttribute("activePanel", document.querySelector(panel).id)
}

function closePanel() {
    activePanel = document.querySelector(`#${closeBtn.getAttribute("activePanel")}`)

    if (activePanel)
        activePanel.style.left = activePanel.getAttribute("direction") == "right" ? "110vw" : "-50vw"

    closeBtn.style.left = "110vw"
}