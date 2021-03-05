export default {
    init: () => {
        const gameContainer = document.querySelector("#pong-game")
        const game = gameContainer.querySelector("iframe")

        const closeBtn = document.querySelector("#close-btn-game")
        closeBtn.addEventListener("click", _ => {
            closeBtn.style.top = "-100vh"

            gameContainer.style.top = "100vh"
        })

        document.querySelector(".logo").addEventListener("click", _ => {
            gameContainer.style.top = "0"

            closeBtn.style.top = "5vh"

            game.focus()
        })
    }
}
