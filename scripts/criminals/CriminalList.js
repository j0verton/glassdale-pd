import { CriminalHTML } from "./CriminalHTML.js"
import { criminalArrayCopier, getCriminals } from "./CriminalProvider.js"

export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const criminalArray = criminalArrayCopier();
        addCriminalstoDOM(criminalArray)
    })

}

const addCriminalstoDOM = (listofCriminals) => {
    let listTarget = document.querySelector(".criminalsContainer");
    let criminalHTMLArray = listofCriminals.map(singleCriminal => {
        return CriminalHTML(singleCriminal)
    })
    
    
    listTarget.innerHTML = criminalHTMLArray.join('');

}