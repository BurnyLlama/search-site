document.querySelector("#searchform").addEventListener("submit", event => {
    event.preventDefault()

    searchText = document.querySelector("#searchbox").value.split(' ').join('+')
    searchQuery = `https://www.google.com/search?q=${searchText}`

    window.location.href = searchQuery
})