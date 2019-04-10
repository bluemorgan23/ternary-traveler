import API from "./dataManager"
import htmlForEachInterest from "./HTMLforEachInterest"
import formHTML from "./formHTML"

console.log(API.getInterestsWithPlace());
const mainContainer = document.querySelector("#display-container");
mainContainer.appendChild(formHTML.buildForm());
API.getInterestsWithPlace().then(interestList => htmlForEachInterest.listAllInterests(interestList));
