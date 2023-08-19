export const createTitle = (filmTitle) =>{
    const h1 = document.createElement('h1');
    h1.textContent = filmTitle;
    return h1;
}