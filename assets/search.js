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

document.querySelector("#searchform").addEventListener("submit", event => {
    event.preventDefault()

    const searchEngine = document.querySelector('input[name="search-engine"]:checked')
    const searchEngineURL = getSearchEngineURL(searchEngine.value)

    searchText = document.querySelector("#searchbox").value.split(' ').join('+')
    searchQuery = `${searchEngineURL}${searchText}`

    window.location.href = searchQuery
})