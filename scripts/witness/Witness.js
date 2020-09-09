export const Witness = (witnessObj) => {
    return `
    <section id="wintess--${witnessObj.id}" class=card-witness">
    <p><strong>Name:</strong> ${witnessObj.name}</p>
    <p>Statement: ${witnessObj.statements}</p>
    </section>     
    `
}