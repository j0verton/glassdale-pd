// const eventHub = document.querySelector(".container")

// const clickedMe = eventHub.addEventListener("click", clickEvent => {
//     console.log(clickEvent)
// })

// eventHub.dispatchEvent(clickedMe)

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            let notes = parsedNotes
        })

}

export const saveNote = note => {
    console.log("note inside save", note)
    debugger;
    return fetch('http://localhost:8088/notes', {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes())
    .then(dispatchStateChangeEvent())
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // Make a new object representation of a note
        const newNote = {
            subject: `${document.getElementById("subject-name").value}`,
            date: `${document.getElementById("note-date").value}`,
            text: `${document.getElementById("note-text").value}`
        }
        console.log(newNote)
        // Change API state and application state
        saveNote(newNote)
    }
})