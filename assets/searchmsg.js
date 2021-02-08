window.addEventListener("resize", () =>
    (window.innerWidth <= 900) ?
        document.querySelector("#searchmsg").innerHTML = "Searching time?" :
        document.querySelector("#searchmsg").innerHTML = "What do you want to search for today?"
)
