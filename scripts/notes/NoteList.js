import { NoteHTML } from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { useNotes, getNotes } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#notesContainer")


export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes();
            const suspects=useCriminals()
            render(notes, suspects)
        })
}

const render = (notes, suspects) => {
    console.log(notes, "notes")
    let notesHTML = notes.map((note) => {
        notes.subjectObj = suspects.find(suspect => {
            return suspect.id === parseInt(note.suspectId)
        })

        console.log(note, "note")
        return NoteHTML(note)
    })
    .join('');
    console.log(notesHTML, "note html")
    contentTarget.innerHTML = notesHTML
}

eventHub.addEventListener("noteStateChanged", () => {	
    const newNotes = useNotes()
    render(newNotes)
})

//  TO ADD  -show all notes button
//          -search notes by subject