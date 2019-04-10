import API from "./dataManager"
import htmlForEachInterest from "./HTMLforEachInterest"


const buildInterestObj = (placeId, name, description, cost, review) => {
    return {
        placeId: placeId,
        name: name,
        description: description,
        cost: cost,
        review: review
    }
}

const submitNewInterest = {
    submitHandler: () => {
        const nameInput = document.querySelector("#createForm-nameInput").value;
        const descInput = document.querySelector("#createForm-descriptionInput").value;
        const costInput = Number(document.querySelector("#createForm-costInput").value);
        const placeInput = document.querySelector("#placeSelect").value;
           API.postInterest(buildInterestObj(placeInput, nameInput, descInput, costInput, "")).then(() => API.getInterestsWithPlace()).then(response => htmlForEachInterest.listAllInterests(response));
    }
}

export default submitNewInterest;