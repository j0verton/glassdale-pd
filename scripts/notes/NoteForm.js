const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (criminalArray) => {
    contentTarget.innerHTML = `
        <input type="textfield" id="note-text" placeholder="Enter Note">
        
        <select class="dropdown" id="subjectName">
            <option value="0">Please select an arresting officer...</option>
            ${
                criminalArray.map(
                   criminalObj => {
                        const name = criminalObj.name;
                        return `<option>${name}</option>`;
                    }
                )
            }
        </select>
    
        <input type="text" id="note-date" placeholder="${Date.now}" value=`${Date.now}`>
        <button id="saveNote">Save Note</button>
    `
}



export const NoteForm = () => {
    render()
}