import API from "./dataManager"
import htmlForEachInterest from "./HTMLforEachInterest"
import formHTML from "./formHTML"

console.log(API.getInterestsWithPlace());
const formContainer = document.querySelector("#createForm-container");
const mainContainer = document.querySelector("#display-container");
formContainer.appendChild(formHTML.buildForm());
API.getInterestsWithPlace().then(interestList => htmlForEachInterest.listAllInterests(interestList));
