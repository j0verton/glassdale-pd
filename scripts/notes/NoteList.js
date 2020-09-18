import { NoteHTML } from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { useNotes, getNotes, deleteNote } from "./NoteProvider.js"

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
    render(newNotes, useCriminals())
})

//  TO ADD  -show all notes button
//          -search notes by subject



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})