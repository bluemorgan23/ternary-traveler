// htmlFactory Module has my create element function and clear container function. The create element creates an HTML element with text and id if I want. The clear container will clear the contents of a container when called on in order to undergo CRUD process.

const htmlFactory = {

    createElementWithText: (element, text, id) => {
        const newEl = document.createElement(element);
        if(text){
            newEl.textContent = text;
        }
        if(id){
            newEl.id = id;
        }
        return newEl;
    },
    clearContainer: (container) => {
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }
}

export default htmlFactory;