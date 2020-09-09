let witnesses =  []

export const useWitnesses = () => {
    return witnesses.slice()
}

export const getWintesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response =response.json())
    .then(parsedResponse => {
        witnesses = parsedResponse;
    })

}