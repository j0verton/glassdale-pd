let criminals = [];

export const criminalArrayCopier = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch ("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                criminals = parsedCriminals;
            }
        )
}



