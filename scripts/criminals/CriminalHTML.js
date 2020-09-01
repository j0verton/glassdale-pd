export const CriminalHTML = (criminalObj) => {
    return `
        <section id="officers-${criminalObj.id}" class=card-officer">
            <h3>Name: ${criminalObj.name}</h3>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </section>     
    `

}