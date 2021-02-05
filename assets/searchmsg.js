window.addEventListener("resize", reportedWindowSize => {
    console.log(reportedWindowSize)
    if (window.innerWidth <= 900)
        document.querySelector("#searchmsg").innerHTML = "Searching time?"
    else
        document.querySelector("#searchmsg").innerHTML = "What do you want to search for today?"
})