import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
const searchTarget = document.querySelector("#note-search")

const renderNoteField = (criminalArray) => {
    contentTarget.innerHTML = `
    <form action="">
        <fieldset>
            <input type="textfield" id="note-text" placeholder="Enter Note">
        </fieldset> 
        <fieldset>
            <select class="dropdown" id="subject-name">
                <option value="0">Please select a subject...</option>
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
        <button type="button" id="Note">Save Note</button>
    `
}





export const NoteForm = () => {
    getCriminals()
    .then(() => {
        renderNoteField(useCriminals()); 
    })
}

// input.valueAsDate = new Date()


// writing code for filtering the note search drop-down
// eventHub.addEventListener("change", event => {
//     if(event.target.id === "notes-searchBy") {
//         const customEvent = new CustomEvent("noteSearchChosen", {
//             detail: {

//             }
//         })

//     }

// })

// const renderNoteSearch = (criminalArray) => {
//     const 
//     if 
    
//     searchTarget.innerHTML = `


// `
//ideas - make the notes aside hidden until a display notes button is pressed

/*
    <fieldset>
        <select class="dropdown" id="notes-searchBy">
            <option value="0">Search notes by...</option>
            <option value="1">Subject</option>
            <option value="0">Date</option>
            
        </select>
    </fieldset>
    <fieldset id="note-search">
    </fieldset>
    <button type="button" id="displayNote"> Display Notes</button>
    </form> */