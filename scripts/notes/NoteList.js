import { NoteHTML } from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { useNotes, getNotes, deleteNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#notesContainer")


export const NoteList = () => {
    debugger
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes();
            const suspects=useCriminals()
            console.log(notes)
            console.log(suspects)
            render(notes, suspects)
        })
}

const render = (notes, suspects) => {
    contentTarget.innerHTML = notes.map((note) => {
        note.subjectObj = suspects.find(suspect => {
            return suspect.id === note.subjectId
        })
        console.log(note)
        return NoteHTML(note)
    }).join('');
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