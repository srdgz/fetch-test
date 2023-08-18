export const createList = (character) =>{

    const listElement = document.createElement("li");
    listElement.className = "list";

    character.array.forEach(elem => {
        document.createElement("li");
    });

    return listElement;
}