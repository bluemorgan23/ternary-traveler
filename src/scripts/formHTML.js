import htmlFactory from "./htmlFactory";
import eventHandlers from "./formEventHandler";
import API from "./dataManager";
import htmlForEachInterest from "./HTMLforEachInterest";

// The buildForm function simply builds the html for the form and returns the card that contains the elements. This is meant to be appended to the div for the form

const mainContainer = document.querySelector("#display-container");

const formHTML = {
    buildForm: () => {
        const formCard = htmlFactory.createElementWithText("div", undefined, "createForm-card");
        const formHeader = formCard.appendChild(htmlFactory.createElementWithText("h3", "Create New Point Of Interest", "form-header"));
        const formCardBody = formCard.appendChild(htmlFactory.createElementWithText("div", undefined, "createFrom-cardBody"));
        const form = formCardBody.appendChild(htmlFactory.createElementWithText("form", undefined, "createForm"));
        const nameFormGroup = form.appendChild(htmlFactory.createElementWithText("div", undefined, "createForm-nameGroup"));
        const nameLabel = nameFormGroup.appendChild(htmlFactory.createElementWithText("label", "Name: ", "createForm-nameLabel"));
        const nameInput = nameFormGroup.appendChild(htmlFactory.createElementWithText("input", undefined, "createForm-nameInput"));
        const descFormGroup = form.appendChild(htmlFactory.createElementWithText("div", undefined, "createForm-descGroup"));
        const descLabel = descFormGroup.appendChild(htmlFactory.createElementWithText("label", "Description"));
        const descInput = descFormGroup.appendChild(htmlFactory.createElementWithText("textarea", undefined, "createForm-descriptionInput"));
        const costFormGroup = form.appendChild(htmlFactory.createElementWithText("div", undefined, "createForm-costGroup"));
        const costLabel = costFormGroup.appendChild(htmlFactory.createElementWithText("label", "Cost: "));
        const costInput = costFormGroup.appendChild(htmlFactory.createElementWithText("input", undefined, "createForm-costInput"));
        const placeSelectGroup = form.appendChild(htmlFactory.createElementWithText("div", undefined, "createForm-selectGroup"))
        const selectLabel = placeSelectGroup.appendChild(htmlFactory.createElementWithText("label", "Select a Place: ", "createForm-selectLabel"));
        const placeSelect = placeSelectGroup.appendChild(htmlFactory.createElementWithText("select", undefined, "placeSelect"));
        const laOption = placeSelect.appendChild(htmlFactory.createElementWithText("option", "Los Angeles"));
        laOption.value = 1;
        const sanFranOption = placeSelect.appendChild(htmlFactory.createElementWithText("option", "San Francisco"));
        sanFranOption.value = 2;
        const torontoOption = placeSelect.appendChild(htmlFactory.createElementWithText("option", "Toronto"));
        torontoOption.value = 3;
        const submitButton = form.appendChild(htmlFactory.createElementWithText("button", "Submit", "createForm-submitButton"));
        submitButton.type = "button";
        submitButton.addEventListener("click", function(){
            htmlFactory.clearContainer(mainContainer);
            eventHandlers.submitHandler();
        })
        return formCard;
    },
    buildEditForm: (interestName, id) => {
        const editFrag = document.createDocumentFragment();
        const editHeader = editFrag.appendChild(htmlFactory.createElementWithText("h3", `Add Cost/Review for ${interestName}`, `editForm-header--${id}`));
        const editForm = editFrag.appendChild(htmlFactory.createElementWithText("form", undefined, "editForm"));
        const editCostGroup = editForm.appendChild(htmlFactory.createElementWithText("div", undefined, "editForm-costGroup"));
        const editCostLabel = editCostGroup.appendChild(htmlFactory.createElementWithText("label", "Add Cost: "));
        const editCostInput = editCostGroup.appendChild(htmlFactory.createElementWithText("input", undefined, "editForm-costInput"));
        const addReviewGroup = editForm.appendChild(htmlFactory.createElementWithText("div", undefined, "editForm-reviewGroup"));
        const addReviewLabel = addReviewGroup.appendChild(htmlFactory.createElementWithText("label", "Add Review: "));
        const addReviewInput = addReviewGroup.appendChild(htmlFactory.createElementWithText("textarea", undefined, "editForm-reviewInput"));
        const saveEditButton = editForm.appendChild(htmlFactory.createElementWithText("button", "Update", `editForm-updateButton--${id}`));
        saveEditButton.type = "button";
        saveEditButton.addEventListener("click", function(event){
            const id = Number(event.target.id.split("--")[1]);
            eventHandlers.submitEditHandler(id);
        })
        return editFrag;
    }
}

export default formHTML;