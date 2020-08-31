export const OfficerHTML = (officerObj) => {
    return `
        <section id="officers-${officerObj.id}" class=card-officer">
            <h2>Name: ${officerObj.name}</h2>
        </section>
    `
}