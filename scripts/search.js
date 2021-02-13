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

        window.addEventListener("resize", () =>
            (window.innerWidth <= 900) ?
            document.querySelector("#searchmsg").innerHTML = "Searching time?" :
            document.querySelector("#searchmsg").innerHTML = "What do you want to search for today?"
        )
    }
}