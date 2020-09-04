const eventHub = document.querySelector(".container")

let notes = []

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            let notes = parsedNotes
        })

}

export const saveNote = note => {
    console.log("note inside save", note)
    return fetch('http://localhost:8088/notes', {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // Make a new object representation of a note
        const noteContent = document.querySelector("#note-text")
		const noteSubject = document.querySelector("#subject-name")
        if(noteSubject.value !== "0") {
            if (noteContent.value) {
                const newNote = {
                    subject: noteSubject.value,
                    date: Date.now(),
                    text: noteContent.value
                }
                saveNote(newNote)
            } else {
                window.alert("Write a Note");
            }
        }else {
			window.alert("Choose a Suspect");
		}

    }
})

export const useNotes = () => {
    return notes.slice();
}