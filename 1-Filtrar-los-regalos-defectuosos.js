// Santa ha recibido una lista de regalos, pero algunos están defectuosos. 
// Un regalo es defectuoso si su nombre contiene el carácter #.

// Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.

/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
    let result = []
    listGifts = gifts.slice(',')

    for (let i = 0; i < listGifts.length; i++) {
        if (!listGifts[i].includes('#')) {
            result.push(listGifts[i])
        }
    }
    return result
}
// Ejemplo de uso:
let gifts = [
  "bici", '#playstation', 'dron', 'coche', '#bici', 'muñeca', 'pc', '#pc'
];

let filteredGifts = filterGifts(gifts);
console.log(filteredGifts); // Debería mostrar: ["bici", "dron", "coche", "muñeca", "pc"]