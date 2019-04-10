// dataManager.js module contains the functions that deal with the database.

const baseURL = "http://localhost:8088"

const API = {
    // This fetch call returns an array of objects that represent each point of interest along with the data about the place they are in.
    getInterestsWithPlace: () => {
        return fetch(`${baseURL}/interests?_expand=place`).then(listOfInterests => listOfInterests.json());
    }
}

export default API;