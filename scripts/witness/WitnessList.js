import { getWintesses, useWitnesses } from "./WitnessProvider.js";
import { Witness } from "./Witness.js";

export const WitnessList = () => {
    getWintesses()
    .then(() => {
        const witnessArray = useWitnesses()
        addWintessesToDOM(witnessArray);
    })
}

const addWintessesToDOM = (witnessCollection) => {
    // find a ref in dom
    const listTarget = document.querySelector(".witnessContainer")

    let witnessHTML = witnessCollection.map(witness => {
        return Witness(witness)
    }).join("")

    listTarget.innerHTML = witnessHTML
}