function getSearchEngineURL(searchEngine) {
    switch (searchEngine) {
        case "google":
            return "https://www.google.com/search?q="

        case "ddg":
            return "https://duckduckgo.com/?&t=Searchy&q="

        case "yahoo":
            return "https://se.search.yahoo.com/search?p="

        case "bing":
            return "https://www.bing.com/search?q="

        case "custom":
            console.log("Trying a custom URL...")
            return document.querySelector("#search-engine-custom-url").value

        default:
            return "https://www.google.com/search?q="
    }
}

function randomSearchPlaceholder() {
    fetch("/assets/animals.json").then(response =>
        response.json()
    ).then(data => {
        const searchWord = data.animals[Math.floor(Math.random() * data.animals.length)]
        document.querySelector("#searchbox").placeholder = `Want to search for ${searchWord.toLowerCase()}?`

        setInterval(() => {
            const searchWord = data.animals[Math.floor(Math.random() * data.animals.length)]
            document.querySelector("#searchbox").placeholder = `Search for ${searchWord.toLowerCase()}?`
        }, 2000)
    })
}

function responsiveChangeOfHeader() {
    (window.innerWidth <= 900) ?
        document.querySelector("#searchmsg").innerHTML = "Searching time?" :
        document.querySelector("#searchmsg").innerHTML = "What do you want to search for today?"
}

export default {
    init: () => {
        document.querySelector("#searchform").addEventListener("submit", event => {
            event.preventDefault()

            const searchEngine = document.querySelector('input[name="search-engine"]:checked')
            const searchEngineURL = getSearchEngineURL(searchEngine.value)

            const searchText = document.querySelector("#searchbox").value.split(' ').join('+')
            const searchQuery = `${searchEngineURL}${searchText}`

            window.location.href = searchQuery
        })

        responsiveChangeOfHeader()
        window.addEventListener("resize", () => responsiveChangeOfHeader())

        randomSearchPlaceholder()
    }
}