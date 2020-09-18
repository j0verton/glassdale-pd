import { useConvictions, getConvictions } from "./ConvictionProvider.js"
/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeId: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


const render = convictionsCollection => {
                contentTarget.innerHTML += `
                    <select class="dropdown" id="crimeSelect">
                        <option value="0">Please select a crime...</option>
                        ${
                            convictionsCollection.map(
                                convictionObj => {
                                    const conviction = convictionObj.name;
                                    return `<option value=${conviction}>${conviction}</option>`;
                                }
                            )
                        }
                    </select>
                `
            }


export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

// eventHub.addEventListener("click", clickEvent => {
//     console.log(clickEvent)
// })