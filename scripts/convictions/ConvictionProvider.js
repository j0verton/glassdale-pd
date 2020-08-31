let convictions = []
export const useConvictions = () => convictions.slice();
export const getConvictions = () => {
    return fetch ("http://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(
        parsedResponse => {
            convictions = parsedResponse
    });
}



