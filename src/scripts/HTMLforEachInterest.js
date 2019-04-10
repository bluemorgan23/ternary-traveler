

//createElementWithText is a builder function that makes an html element with text and id if I chose to do so.
const createElementWithText = (element, text, id) => {
    const newEl = document.createElement(element);
    if(text){
        newEl.textContent = text;
    }
    if(id){
        newEl.id = id;
    }
    return newEl;
}

const htmlForEachInterest = {
    // The buildEachInterest method will be called for each interest within the listInterestsToDom function. It takes the object (interest) and builds the structure with the values from the database.
    buildEachInterest: (interestObj) => {
        const cardForEach = createElementWithText("div", undefined, `card--${interestObj.id}`);
        const cardHeader = cardForEach.appendChild(createElementWithText("h3", interestObj.name, `interestName--${interestObj.id}`));
        const cardBody = cardForEach.appendChild(createElementWithText("div", undefined, `cardBody--${interestObj.id}`));
        const interestDescription = cardBody.appendChild(createElementWithText("p", interestObj.description));
        const interestCost = cardBody.appendChild(createElementWithText("p", interestObj.cost));
        if (interestObj.review !== ""){
            const interestReview = cardBody.appendChild(createElementWithText("p", interestObj.review));
        }
        const interestLocation = cardBody.appendChild(createElementWithText("p", interestObj.place.name))
        return cardForEach;
    },
    listAllInterests: (interestArray) => {
        const mainContainer = document.querySelector("#display-container");
        interestArray.forEach(interest => mainContainer.appendChild(htmlForEachInterest.buildEachInterest(interest)));
    }
}

export default htmlForEachInterest;