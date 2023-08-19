import { createTitle } from "./components/title.js";
import { createList } from "./components/list.js";

const app = (root) => {

const endPoint = 'https://www.swapi.tech/api/films/5';

fetch(endPoint)
.then(response => {
    if (!response.ok) {
        throw Error('Something went wrong.');
    }
    return response.json();
})
.then(data => {
    const title = data.result.properties.title;
    const h1 = createTitle(title);
    root.append(h1);

    const characters = data.result.properties.characters;
    const list = createList(characters);
    root.append(list);
})
.catch(error => {
    console.log(error)
});
}

export default app;