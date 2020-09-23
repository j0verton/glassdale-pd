import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
const searchTarget = document.querySelector("#note-search")

const renderNoteField = (criminalArray) => {
    contentTarget.innerHTML = `
    <h2>Notes</h2>
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
                            return `<option value="${criminalObj.id}">${criminalObj.name}</option>`;
                        }
                    )
                }
            </select>
        </fieldset>
        <button type="button" id="saveNote">Save Note</button>
        <fieldset id="notes-searchBy" display="none">
        <select class="dropdown">
            <option value="0">Search notes by...</option>
            <option value="1">Subject</option>
            <option value="0">Date</option> 
        </select>
        </fieldset>
        <button type="button" id="displayNote">Display Notes</button>
        
    `
}

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        renderNoteField(useCriminals()); 
    })
}

export const NoteEditForm = noteObj => {
`
    <input id="noteid--${noteObj.id}" display="hidden>
    <fieldset>
        <input type="textfield" id="note-text">${noteObj.text}</input>
    </fieldset> `
} 