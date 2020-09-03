import { getOfficers, useOfficers } from './OfficerProvider.js'
const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".filters__officer")

const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an arresting officer...</option>
            ${
                officersCollection.map(
                    officerObj => {
                        const name = officerObj.name;
                        return `<option>${name}</option>`;
                    }
                )
            }
        </select>
    `
}


export const OfficerSelect = () => {
getOfficers()
.then(() => {
const convictions = useOfficers()
render(convictions)
})
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})