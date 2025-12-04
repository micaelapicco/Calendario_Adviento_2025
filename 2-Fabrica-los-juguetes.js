// La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
// Cada línea indica qué juguete hay que fabricar y cuántas unidades.

// Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.

// Tienes una lista de objetos con esta forma:

// toy: el nombre del juguete (string)
// quantity: cuántas unidades hay que fabricar (number)
// Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:

// Cada juguete repetido tantas veces como indique quantity
// En el mismo orden en el que aparecen en la lista original
// Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)
// Los elfos a veces se les va la cabeza y como quantity pasan un string, pero eso no es correcto y hay que ignorarlo.

/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
    let result = []
    if (giftsToProduce.length > 0) {
        for (let i = 0; i < giftsToProduce.length; i++) {
          const gift = giftsToProduce[i];
          if (typeof giftsToProduce[i].quantity === 'number' && giftsToProduce[i].quantity > 0) {
            for (let j = 0; j < giftsToProduce[i].quantity; j++) {
              result.push(gift.toy);
            }
          }
        }
    }
  return result
}


// Ejemplo de uso:
const giftsToProduce = [
  { toy: 'car', quantity: 2 },
  { toy: 'doll', quantity: 0 },
    { toy: 'doll', quantity: -9 }
  ]

  let result = manufactureGifts(giftsToProduce)
  console.log(result) // Debería mostrar: ['car', 'car']