import API from "./dataManager"
import htmlForEachInterest from "./HTMLforEachInterest"

console.log(API.getInterestsWithPlace());
const mainContainer = document.querySelector("#display-container");
API.getInterestsWithPlace().then(interestList => htmlForEachInterest.listAllInterests(interestList));