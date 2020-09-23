import { useCriminals } from "../criminals/CriminalProvider.js"
import { getCriminalFacilities, useCriminalFacilities }from "./CriminalFacilityProvider.js"
import { Facility } from "./Facility.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facilityContainer")

eventHub.addEventListener("facilitiesButtonClicked", event => {
    console.log("click")
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
)

const render = (allCriminals, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = allFacilities.map(fac=>{
        const criminalsForFacility = allRelationships.filter(cf => cf.facilityId === fac.id)
        const criminals = criminalsForFacility.map(cf => {
            const matchingCriminalsObj = allCriminals.find(criminal => criminal.id === cf.criminalId) 
            return matchingCriminalsObj
        })
        return Facility(fac, criminals)
    }).join("")
    
}