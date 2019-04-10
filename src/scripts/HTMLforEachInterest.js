import htmlFactory from "./htmlFactory";
import eventHandlers from "./formEventHandler";

const htmlForEachInterest = {
    // The buildEachInterest method will be called for each interest within the listInterestsToDom function. It takes the object (interest) and builds the structure with the values from the database.
    buildEachInterest: (interestObj) => {
        const cardForEach = htmlFactory.createElementWithText("div", undefined, `card--${interestObj.id}`);
        const cardHeader = cardForEach.appendChild(htmlFactory.createElementWithText("h3", interestObj.name, `interestName--${interestObj.id}`));
        const cardBody = cardForEach.appendChild(htmlFactory.createElementWithText("div", undefined, `cardBody--${interestObj.id}`));
        const interestDescription = cardBody.appendChild(htmlFactory.createElementWithText("p", interestObj.description));
        const interestCost = cardBody.appendChild(htmlFactory.createElementWithText("p", interestObj.cost));
        if (interestObj.review !== ""){
            const interestReview = cardBody.appendChild(htmlFactory.createElementWithText("p", interestObj.review));
        }
        const interestLocation = cardBody.appendChild(htmlFactory.createElementWithText("p", interestObj.place.name))
        const interestButtonGroup = cardBody.appendChild(htmlFactory.createElementWithText("div", undefined, `interestButtonGroup--${interestObj.id}`))
        const interestEditButton = interestButtonGroup.appendChild(htmlFactory.createElementWithText("button", "Add Cost and Review", `editInterestButton--${interestObj.id}`));
        interestEditButton.type = "button";
        interestEditButton.addEventListener("click", function(){
            const id = Number(event.target.id.split("--")[1]);
            const cardToEdit = document.querySelector(`#card--${id}`);
            eventHandlers.addReviewHandler(cardToEdit, id);
        })
        const interestDeleteButton = interestButtonGroup.appendChild(htmlFactory.createElementWithText("button", "Delete Point of Interest", `DeleteInterestButton--${interestObj.id}`));
        interestDeleteButton.type = "button";
        interestDeleteButton.addEventListener("click", function(){
            const id = event.target.id.split("--")[1];
            eventHandlers.deleteHandler(id);
        })
        return cardForEach;
    },
    listAllInterests: (interestArray) => {
        const mainContainer = document.querySelector("#display-container");
        interestArray.forEach(interest => mainContainer.appendChild(htmlForEachInterest.buildEachInterest(interest)));
    }
}

export default htmlForEachInterest;