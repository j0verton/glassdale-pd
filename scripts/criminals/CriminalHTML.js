import { AlibiDialog } from "./AlibiDialog.js"

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("associates--")){
        const [prefix, criminalId] = event.target.id.split("--")

        const alibiEvent = new CustomEvent("associatesClicked", {
            detail : {
                chosenCriminal: criminalId
            }
        })
        eventHub.dispatchEvent(alibiEvent);
    }
})

export const CriminalHTML = (criminalObj) => {
    return `
        <section id="officers-${criminalObj.id}" class=card-officer">
            <h3>Name: ${criminalObj.name}</h3>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
            <button type="button" id="associates--${criminalObj.id}">Associate Alibis</button>
            ${AlibiDialog(criminalObj.id)}
            </section>     
    `
}