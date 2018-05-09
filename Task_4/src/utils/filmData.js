// Get all movies from API
export function getFilms(cb) {
    fetch('//react-cdp-api.herokuapp.com/movies')
        .then(response => {
            console.log("response: " + response);
            return response.json()
        })
        .then(data => {
            console.log("data: " + data);
            if(typeof cb === 'function') cb(data);
            return data;
        })
        .catch(err => console.error(err.toString()))
}

// Get film info by ID
export function getFilmInfo(id, cb) {
    fetch('//react-cdp-api.herokuapp.com/movies/' + id)
        .then(response => response.json())
        .then(data => {
            if(typeof cb === 'function') cb(data);
            return data;
        })
        .catch(err => console.error(err.toString()))
}