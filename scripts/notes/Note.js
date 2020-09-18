const eventHub = document.querySelector(".container")
export const NoteHTML = (noteObject) =>{
    return `
        <section class=notes>
            <div class="note-subject"> Subject: ${noteObject.suspectObj.name}</div>
            <div class="note-text"> Note: ${noteObject.text}</div>
            <div class="note-timestamp"> Timestamp: ${new Date(noteObject.date).toLocaleDateString('en-US') }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    ` 

}



