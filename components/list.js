export const createList = (characters) => {
    let ulElement = document.createElement('ul');
    characters.forEach(elem => {
        let liElement = document.createElement("li");
        liElement.textContent = elem;
        ulElement.appendChild(liElement);
    });
    return ulElement;
}