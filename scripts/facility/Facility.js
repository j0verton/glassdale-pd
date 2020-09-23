//In the Facility component, use map() to iterate the list of matching criminals that was determined in the FacilityList component.

export const Facility = (facility, criminalObj )=>{
return ` 
    <h2>${facility.facilityName}</h2>
    <p>Security: ${facility.securityLevel}</p>
    <p>Capacity: ${facility.capacity}</p>
    <h2>Suspects</h2>
    <ul>
        ${
            criminalObj.map(obj => {
                return `<li>${obj.name}</li>`
            }).join("")
        }
    </ul>
`
}