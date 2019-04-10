import htmlFactory from "./htmlFactory";
import eventHandlers from "./formEventHandler";
import API from "./dataManager";
import htmlForEachInterest from "./HTMLforEachInterest";

// The buildForm function simply builds the html for the form and returns the card that contains the elements. This is meant to be appended to the div for the form

const mainContainer = document.querySelector("#display-container");

const formHTML = {
    buildForm: () => {
        const formCard = htmlFactory.createElementWithText("div", undefined, "createForm-card");
        formCard.classList.add("card");
        formCard.classList.add("bg-light");
        const formHeader = formCard.appendChild(htmlFactory.createElementWithText("h3", "Create New Point Of Interest", "form-header"));
        formHeader.classList.add("card-header");
        const formCardBody = formCard.appendChild(htmlFactory.createElementWithText("div", undefined, "createFrom-cardBody"));
        formCardBody.classList.add("card-body");
        const form = formCardBody.appendChild(htmlFactory.createElementWithText("form", undefined, "createForm"));
        form.classList.add("form");
        const nameFormGroup = form.appendChild(htmlFactory.createElementWithText("div", undefined, "createForm-nameGroup"));
        nameFormGroup.classList.add("form-group");
        const nameLabel = nameFormGroup.appendChild(htmlFactory.createElementWithText("label", "Name: ", "createForm-nameLabel"));
        const nameInput = nameFormGroup.appendChild(htmlFactory.createElementWithText("input", undefined, "createForm-nameInput"));
        nameInput.placeholder = "The Zoo e.g."
        nameInput.classList.add("form-control");
        const descFormGroup = form.appendChild(htmlFactory.createElementWithText("div", undefined, "createForm-descGroup"));
        descFormGroup.classList.add("form-group");
        const descLabel = descFormGroup.appendChild(htmlFactory.createElementWithText("label", "Description"));
        const descInput = descFormGroup.appendChild(htmlFactory.createElementWithText("textarea", undefined, "createForm-descriptionInput"));
        descInput.placeholder = "Cool animals to see e.g."
        descInput.classList.add("form-control");
        const costFormGroup = form.appendChild(htmlFactory.createElementWithText("div", undefined, "createForm-costGroup"));
        costFormGroup.classList.add("form-group");
        const costLabel = costFormGroup.appendChild(htmlFactory.createElementWithText("label", "Cost: "));
        const costInput = costFormGroup.appendChild(htmlFactory.createElementWithText("input", undefined, "createForm-costInput"));
        costInput.placeholder = "Enter '0' if Unknown"
        costInput.classList.add("form-control");
        const placeSelectGroup = form.appendChild(htmlFactory.createElementWithText("div", undefined, "createForm-selectGroup"))
        placeSelectGroup.classList.add("form-group");
        const selectLabel = placeSelectGroup.appendChild(htmlFactory.createElementWithText("label", "Select a Place: ", "createForm-selectLabel"));
        const placeSelect = placeSelectGroup.appendChild(htmlFactory.createElementWithText("select", undefined, "placeSelect"));
        const laOption = placeSelect.appendChild(htmlFactory.createElementWithText("option", "Los Angeles"));
        laOption.value = 1;
        const sanFranOption = placeSelect.appendChild(htmlFactory.createElementWithText("option", "San Francisco"));
        sanFranOption.value = 2;
        const torontoOption = placeSelect.appendChild(htmlFactory.createElementWithText("option", "Toronto"));
        torontoOption.value = 3;
        const filterInterests = formCardBody.appendChild(htmlFactory.createElementWithText("div"));
        filterInterests.classList.add("form-control");
        const filterLabel = filterInterests.appendChild(htmlFactory.createElementWithText("label", "Filter Points of Interest by Location"));
        filterInterests.setAttribute("for", "filterInterests");
        const radioLA = filterInterests.appendChild(htmlFactory.createElementWithText("input", "Los Angeles"))
        radioLA.type = "radio";
        radioLA.name = "filterInterests";
        const radioSF = filterInterests.appendChild(htmlFactory.createElementWithText("input", "San Francisco"))
        radioSF.type = "radio";
        radioSF.name = "filterInterests";
        const radioT = filterInterests.appendChild(htmlFactory.createElementWithText("input", "Toronto"))
        radioT.type = "radio";
        radioT.name = "filterInterests";
        const submitButton = form.appendChild(htmlFactory.createElementWithText("button", "Submit", "createForm-submitButton"));
        submitButton.type = "button";
        submitButton.classList.add("btn");
        submitButton.classList.add("btn-primary");
        submitButton.classList.add("btn-block");
        submitButton.addEventListener("click", function(){
            htmlFactory.clearContainer(mainContainer);
            eventHandlers.submitHandler();
        })
        return formCard;
    },
    buildEditForm: (interestName, id) => {
        const editFrag = document.createDocumentFragment();
        const editHeader = editFrag.appendChild(htmlFactory.createElementWithText("h3", `Add Cost/Review for ${interestName}`, `editForm-header--${id}`));
        editHeader.classList.add("card-header");
        const editBody = editFrag.appendChild(htmlFactory.createElementWithText("div"));
        editBody.classList.add("card-body");
        const editForm = editBody.appendChild(htmlFactory.createElementWithText("form", undefined, "editForm"));
        editForm.classList.add("form");
        const editCostGroup = editForm.appendChild(htmlFactory.createElementWithText("div", undefined, "editForm-costGroup"));
        editCostGroup.classList.add("form-group");
        const editCostLabel = editCostGroup.appendChild(htmlFactory.createElementWithText("label", "Add Cost: "));
        const editCostInput = editCostGroup.appendChild(htmlFactory.createElementWithText("input", undefined, "editForm-costInput"));
        editCostInput.classList.add("form-control");
        editCostInput.placeholder = "$$$";
        const addReviewGroup = editForm.appendChild(htmlFactory.createElementWithText("div", undefined, "editForm-reviewGroup"));
        addReviewGroup.classList.add("form-group");
        const addReviewLabel = addReviewGroup.appendChild(htmlFactory.createElementWithText("label", "Add Review: "));
        const addReviewInput = addReviewGroup.appendChild(htmlFactory.createElementWithText("textarea", undefined, "editForm-reviewInput"));
        addReviewInput.placeholder = "The zoo was a blast! E.g.";
        addReviewInput.classList.add("form-control");
        const saveEditButton = editForm.appendChild(htmlFactory.createElementWithText("button", "Update", `editForm-updateButton--${id}`));
        saveEditButton.type = "button";
        saveEditButton.classList.add("btn");
        saveEditButton.classList.add("btn-primary");
        saveEditButton.classList.add("btn-block");
        saveEditButton.addEventListener("click", function(event){
            const id = Number(event.target.id.split("--")[1]);
            eventHandlers.submitEditHandler(id);
        })
        return editFrag;
    }
}

export default formHTML;