import htmlFactory from "./htmlFactory";
import eventHandlers from "./formEventHandler";

const htmlForEachInterest = {
    // The buildEachInterest method will be called for each interest within the listInterestsToDom function. It takes the object (interest) and builds the structure with the values from the database.
    buildEachInterest: (interestObj) => {
        const cardForEach = htmlFactory.createElementWithText("div", undefined, `card--${interestObj.id}`);
        cardForEach.classList.add("card");
        cardForEach.classList.add("mb-2");
        const cardHeader = cardForEach.appendChild(htmlFactory.createElementWithText("h3", interestObj.name, `interestName--${interestObj.id}`));
        cardHeader.classList.add("card-header");
        const cardBody = cardForEach.appendChild(htmlFactory.createElementWithText("div", undefined, `cardBody--${interestObj.id}`));
        cardBody.classList.add("card-body");
        switch(true){
            case(interestObj.placeId === 1):
                cardForEach.classList.add("bg-secondary");
                cardForEach.classList.add("text-white");
                cardForEach.classList.add("LA");
                break;
            case(interestObj.placeId === 2):
                cardForEach.classList.add("bg-info");
                cardForEach.classList.add("text-white");
                cardForEach.classList.add("SF");
                break;
            case(interestObj.placeId === 3):
                cardForEach.classList.add("bg-success");
                cardForEach.classList.add("text-white");
                cardForEach.classList.add("T");
        }
        const interestDescription = cardBody.appendChild(htmlFactory.createElementWithText("p", interestObj.description));
        interestDescription.classList.add("card-text");
        const interestCost = cardBody.appendChild(htmlFactory.createElementWithText("p", `$${interestObj.cost}`));
        interestCost.classList.add("card-text");
        if (interestObj.review !== ""){
            const interestReview = cardBody.appendChild(htmlFactory.createElementWithText("p", `Review: ${interestObj.review}`));
            interestReview.classList.add("card-text");
        }
        const interestLocation = cardBody.appendChild(htmlFactory.createElementWithText("h5", interestObj.place.name))
        interestLocation.classList.add("card-text");
        const interestButtonGroup = cardBody.appendChild(htmlFactory.createElementWithText("div", undefined, `interestButtonGroup--${interestObj.id}`))
        interestButtonGroup.classList.add("btn-group");
        const interestEditButton = interestButtonGroup.appendChild(htmlFactory.createElementWithText("button", "Add Cost and Review", `editInterestButton--${interestObj.id}`));
        interestEditButton.classList.add("btn");
        interestEditButton.classList.add("btn-warning");
        interestEditButton.type = "button";
        interestEditButton.addEventListener("click", function(){
            const id = Number(event.target.id.split("--")[1]);
            const cardToEdit = document.querySelector(`#card--${id}`);
            eventHandlers.addReviewHandler(cardToEdit, id);
        })
        const interestDeleteButton = interestButtonGroup.appendChild(htmlFactory.createElementWithText("button", "Delete Point of Interest", `DeleteInterestButton--${interestObj.id}`));
        interestDeleteButton.type = "button";
        interestDeleteButton.classList.add("btn");
        interestDeleteButton.classList.add("btn-danger");
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