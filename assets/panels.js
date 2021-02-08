document.querySelectorAll(".panel-btn").forEach(button => 
        button.addEventListener("click", _ =>
            openPanel(`#${button.id.split('-')[0]}-panel`, button.getAttribute("direction"))
    )
)

closeBtn = document.querySelector("#close-btn")

closeBtn.addEventListener("click", _ => {
    activePanel = document.querySelector(`#${closeBtn.getAttribute("activePanel")}`)
    activePanel.style.left = activePanel.getAttribute("direction") == "right" ? "110vw" : "-50vw"
    closeBtn.style.left = "110vw"
})

function openPanel(panel, direction) {
    document.querySelector(panel).style.left = direction == "right" ? "60vw" : "0vw"
    closeBtn.style.left = direction == "right" ? "56.5vw" : "38.5vw"
    closeBtn.setAttribute("activePanel", document.querySelector(panel).id)
}