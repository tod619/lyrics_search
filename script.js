const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')
const more = document.getElementById('more')

const apiURL = 'https://api.lyrics.ovh'

// Search songs
async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`)
    const data = await res.json()

    showData(data)
}

function showData(data) {}

// EventListners
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value.trim()


    if(!searchTerm) {
        alert('Please type in a search term!')
    } else {
        searchSongs(searchTerm)
    }
    
})

