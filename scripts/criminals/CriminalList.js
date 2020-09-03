import { CriminalHTML } from "./CriminalHTML.js"
import { getCriminals, useCriminals} from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")
// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if (event.detail.crimeId !== '0') {
        /*
            Filter the criminals application state down to the people that committed the crime
        */

        const matchingCriminals = useCriminals().filter(criminal => {
            return criminal.conviction === event.detail.crimeId
        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       render(matchingCriminals)
    } else {
        render(useCriminals());
    }
})

eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer
    

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const officersCriminals = criminals.filter(criminal=> {
        if (criminal.arrestingOfficer === officerName) {
                    return true
                
            }
        })
        render(officersCriminals)
    })


const render = (criminalObj) => {

    let listTarget = document.querySelector(".criminalsContainer");
    let criminalHTMLArray = criminalObj.map(singleCriminal => {
        return CriminalHTML(singleCriminal)
    })
    listTarget.innerHTML = criminalHTMLArray.join('');
}

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}