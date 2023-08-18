const endPoint = 'https://www.swapi.tech/api/films/3';

fetch(endPoint)
.then(response => {
    if (!response.ok) {
        throw Error('Something went wrong.');
    }
    return response.json();
})
.then(data => {
    console.log(data.result.properties)
})
.catch(error => {
    console.log(error)
});