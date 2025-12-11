// En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

// Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

// Le pasan dos parámetros:

// size: el tamaño del regalo cuadrado
// symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
// El regalo debe cumplir:

// Debe ser un cuadrado de size x size.
// El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
// Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
// El resultado final debe ser un string con saltos de línea \n.


/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
    let gift = '';
    for (let i = 1; i <= size; i++) {
        if (size >= 2) {
            for (let j = 1; j <= size; j++) {
                if (i === 1 || i === size) {
                    gift += symbol;
                } else {
                    if (j === 1 || j === size) {
                        gift += symbol;
                    } else {
                        gift += ' ';
                    }
                }
            }
        }
        if (i < size ) {  // Solo si NO es la última fila
        gift += "\n";
        }
    }
    gift.trimEnd();
    return gift
}

console.log(drawGift(5, '*'))
// *****
// *   *
// *   *
// *   *
// *****