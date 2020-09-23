let facilities = []
const eventHub = document.querySelector(".container")

export const useFacilities = () => facilities.slice()

export const getFacilities = () => {
   return fetch("https://criminals.glassdale.us/facilities")
    .then(response => response.json())
    .then(apiData => {
        facilities = apiData
    })
}

export const DisplayFacilitiesButton = () => {

    document.querySelector(".facility__button").innerHTML = `<button type="button" id="facilitiesBtn">Display Facilities</button>`
}


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "facilitiesBtn") {
        let newCustomEvent = new CustomEvent("facilitiesButtonClicked") 
        eventHub.dispatchEvent(newCustomEvent)
    }
})