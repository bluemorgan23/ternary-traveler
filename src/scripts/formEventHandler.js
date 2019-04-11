import API from "./dataManager"
import htmlForEachInterest from "./HTMLforEachInterest"
import htmlFactory from "./htmlFactory";
import formHTML from "./formHTML";

// The buildInterestObj function builds an object out of the arguments that will be posted to the database
const buildInterestObj = (placeId, name, description, cost, review, id) => {
    let newObj = {
        placeId: placeId,
        name: name,
        description: description,
        cost: cost,
        review: review
    };
    if(id){
        newObj.id = id;
    }
    return newObj;
}

const mainContainer = document.querySelector("#display-container");

const eventHandlers = {
    // submitHandler is meant to post the new interest to the database with the input field values as the parameters for buildInterestObj. It also clears the display container and updates it with a new fetch call.
    submitHandler: () => {
        let nameInput = document.querySelector("#createForm-nameInput").value;
        const form = document.querySelector("#createForm");
        let descInput = document.querySelector("#createForm-descriptionInput").value;
        let costInput = Number(document.querySelector("#createForm-costInput").value);
        const placeInput = Number(document.querySelector("#placeSelect").value);
        console.log(costInput);
        if(isNaN(costInput)){
            alert("Invalid entry for cost. Please Enter a number.")
            API.getInterestsWithPlace().then(response => htmlForEachInterest.listAllInterests(response));
        } else if(nameInput !== "" && descInput !== "" && costInput !== ""){
            API.postInterest(buildInterestObj(placeInput, nameInput, descInput, costInput, "")).then(() => API.getInterestsWithPlace()).then(response => htmlForEachInterest.listAllInterests(response)).then(() => form.reset())
        } else {
            alert("Input field appears to be empty! Please make sure you have filled out the form.")
            API.getInterestsWithPlace().then(response => htmlForEachInterest.listAllInterests(response))
        }
    },
    addReviewHandler: (cardToEdit, id) => {
        const interestName = cardToEdit.firstChild.textContent;
        htmlFactory.clearContainer(cardToEdit);
        cardToEdit.appendChild(formHTML.buildEditForm(interestName, id));
    },
    submitEditHandler: (id) => {
        const costInput = Number(document.querySelector("#editForm-costInput").value);
        const reviewInput = document.querySelector("#editForm-reviewInput").value;
        API.getInterest(id).then(interest => {
            return [interest.placeId, interest.name, interest.description]
        }).then(newArray => {
            return API.patchInterest(id, buildInterestObj(newArray[0], newArray[1], newArray[2], costInput, reviewInput, id))
        }).then(() => htmlFactory.clearContainer(mainContainer)).then(() => API.getInterestsWithPlace()).then(response => htmlForEachInterest.listAllInterests(response));
    },
    deleteHandler: (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            API.deleteInterest(id).then(() => htmlFactory.clearContainer(mainContainer)).then(() => API.getInterestsWithPlace()).then((response => htmlForEachInterest.listAllInterests(response)));
        }
    }
}

export default eventHandlers;