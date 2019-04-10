import API from "./dataManager"
import htmlForEachInterest from "./HTMLforEachInterest"
import htmlFactory from "./htmlFactory";
import formHTML from "./formHTML";

// The buildInterestObj function builds an object out of the arguments that will be posted to the database
const buildInterestObj = (placeId, name, description, cost, review) => {
    return {
        placeId: placeId,
        name: name,
        description: description,
        cost: cost,
        review: review
    }
}

const eventHandlers = {
    // submitHandler is meant to post the new interest to the database with the input field values as the parameters for buildInterestObj. It also clears the display container and updates it with a new fetch call.
    submitHandler: () => {
        const nameInput = document.querySelector("#createForm-nameInput").value;
        const descInput = document.querySelector("#createForm-descriptionInput").value;
        const costInput = Number(document.querySelector("#createForm-costInput").value);
        const placeInput = document.querySelector("#placeSelect").value;
           API.postInterest(buildInterestObj(placeInput, nameInput, descInput, costInput, "")).then(() => API.getInterestsWithPlace()).then(response => htmlForEachInterest.listAllInterests(response));
    },
    addReviewHandler: (cardToEdit) => {
        const interestName = cardToEdit.firstChild.textContent;
        htmlFactory.clearContainer(cardToEdit);
        cardToEdit.appendChild(formHTML.buildEditForm(interestName));
    }
}

export default eventHandlers;