import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { Criminal } from "./CriminalHTML.js"
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

        // NEED TO add... make list return if selection value =0
        // .. combine officer and conviction select?
    })

    
    // Render ALL criminals initally
    document.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showSuspectsBtn" && clickEvent.target.textContent.includes("Show")){
            CriminalList()
            clickEvent.target.textContent = "Hide All Suspects"
        } else if (clickEvent.target.id === "showSuspectsBtn"){
            document.querySelector(".criminalsContainer").innerHTML = ""
            clickEvent.target.textContent = "Show All Suspects"
        }
    })
    
    // const CriminalList = () => {
    //     getCriminals()
    //     .then(() => {
    //         const appStateCriminals = useCriminals()
    //         render(appStateCriminals)
    //     })
    // }
    
    export const showSuspectsBtn = () => {
        let html = `<button type="button" id="showSuspectsBtn">Show All Suspects</button>`
        document.querySelector(".filters__crime").innerHTML += html
    } 
    
    export const CriminalList = () => {
        // Kick off the fetching of both collections of data
        getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()
                
                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
            )
        }
        
        
        const render = (criminalsToRender, allFacilities, allRelationships) => {
            // Step 1 - Iterate all criminals
            contentTarget.innerHTML = criminalsToRender.map(
                (criminalObject) => {
                    // Step 2 - Filter all relationships to get only ones for this criminal
                    const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
                    
                    // Step 3 - Convert the relationships to facilities with map()
                    const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                        const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                        return matchingFacilityObject
                    })
                    
                    // Must pass the matching facilities to the Criminal component
                    return Criminal(criminalObject, facilities)
                }
                ).join("")
    
    // const render = (criminalObj) => {
    
    //     let listTarget = document.querySelector(".criminalsContainer");
    //     let criminalHTMLArray = criminalObj.map(singleCriminal => {
    //         return CriminalHTML(singleCriminal)
    //     })
    //     listTarget.innerHTML = criminalHTMLArray.join('');
    // }
}