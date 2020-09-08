import { NoteHTML } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"
import { useNotes, getNotes } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#notesContainer")


export const NoteList = () => {
    getNotes()
    .then(useNotes)
    .then(render)

}

const render = (notes) => {
    const criminals = useCriminals()
    contentTarget.innerHTML = notes.map((note) => {
        return NoteHTML(note)
    }).join('');
    
}

eventHub.addEventListener("noteStateChanged", () => {	
    const newNotes = useNotes()
    render(newNotes)
})

//  TO ADD  -show all notes button
//          -search notes by subject