/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca.
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 * //porque el valor de veces es 5 igual que conditional inicial asi que se  encuentra en estado falso
 *
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces.
 * Reestricción: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

let veces = 15;

for (let i = 5; i < veces; i++) {
  console.log("No me voy a ejecutar...");
}
