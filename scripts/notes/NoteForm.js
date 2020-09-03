import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (criminalArray) => {
    contentTarget.innerHTML = `
    <form action="">
        <fieldset>
            <input type="textfield" id="note-text" placeholder="Enter Note">
        </fieldset> 
        <fieldset>
            <select class="dropdown" id="subject-name">
                <option value="0">Please select an arresting officer...</option>
                ${
                    criminalArray.map(
                    criminalObj => {
                            const name = criminalObj.name;
                            return `<option value="${criminalObj.name}">${criminalObj.name}</option>`;
                        }
                    )
                }
            </select>
        </fieldset>
        <button id="saveNote">Save Note</button>
    </form>
    `
    // const input = document.getElementById("note-date")
}



export const NoteForm = () => {
    getCriminals()
    .then(() => {
    render(useCriminals()); 
    })
}

// input.valueAsDate = new Date()