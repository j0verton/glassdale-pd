/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
    .then(()=> {
        const convictions = useConvictions()
    

        const render = convictionsCollection => {
            /*
                Use interpolation here to invoke the map() method on
                the convictionsCollection to generate the option elements.
                Look back at the example provided above.
            */
           console.log(convictions)
            contentTarget.innerHTML = `
                <select class="dropdown" id="crimeSelect">
                    <option value="0">Please select a crime...</option>
                    ${
                        convictions.map(
                            convictionObj => {
                                const conviction = convictionObj.name;
                                return `<option>${conviction}</option>`;
                            }
                        )
                    }
                </select>
            `
        }

        render(convictions)
    })
}