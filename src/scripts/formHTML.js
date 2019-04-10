import htmlFactory from "./htmlFactory";

const formHTML = {
    buildForm: () => {
        const formCard = htmlFactory.createElementWithText("div");
        const formHeader = formCard.appendChild(htmlFactory.createElementWithText("h3", "Create New Point Of Interest", "form-header"));
        const form = formCard.appendChild(htmlFactory.createElementWithText("form"));
        const nameFormGroup = form.appendChild(htmlFactory.createElementWithText("div"));
        const nameLabel = nameFormGroup.appendChild(htmlFactory.createElementWithText("label", "Name: ", "createForm-nameLabel"));
        const nameInput = nameFormGroup.appendChild(htmlFactory.createElementWithText("input", undefined, "createForm-nameInput"));
        const descFormGroup = form.appendChild(htmlFactory.createElementWithText("div"));
        const descLabel = descFormGroup.appendChild(htmlFactory.createElementWithText("label", "Description"));
        const descInput = descFormGroup.appendChild(htmlFactory.createElementWithText("textarea", undefined, "createForm-descriptionInput"));
        const costFormGroup = form.appendChild(htmlFactory.createElementWithText("div"));
        const costLabel = costFormGroup.appendChild(htmlFactory.createElementWithText("label", "Cost: "));
        const costInput = costFormGroup.appendChild(htmlFactory.createElementWithText("input", undefined, "createForm-costInput"));
        return formCard;
    }
}

export default formHTML;