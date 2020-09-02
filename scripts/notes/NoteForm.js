const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <input type="textfield" id="note-text" placeholder="Enter Note">
        <input type="text" id="subject-name" placeholder="Subject Name">
        <input type="text" id="note-date" placeholder="Note Date">
        <button id="saveNote">Save Note</button>
    `
}



export const NoteForm = () => {
    render()
}