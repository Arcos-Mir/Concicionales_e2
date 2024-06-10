/* Ejercicio 1 hacer un programa para verificar si un número es par o impar */

let num = prompt("Escribe un número");

if (num % 2 === 0) {
    alert(num + " es par");
    /* console.log(num, " es par"); */
} else {
    alert(num + " es impar");
    /* console.log(num, " es impar"); */
}

/* Ejercicio 2 hacer un programa que indique si un número es positivo o negativo */

let number =  prompt("Escribe un número");

if (parseInt(number) >= 0) {

    alert(number + " es positivo");
} else {
    alert(number + " es negativo");
}

/* Ejercicio 3 pedir 2 números enteros y devolver el cociente de dividir el primero entre el segundo, si se ingresa un cero, no hacer la división y enviar un mensaje de error */

let num1 = prompt("Escribe un número entero");
let num2 = prompt("Escribe otro número entero");
let result = 0;

if (parseInt(num1) !== 0 && parseInt(num2) !== 0) {

    result = parseInt(num1) / parseInt(num2);
    alert(num1 + " ÷ " + num2 + " es igual a: " + result);
} else {
    alert(" Ingresa un número válido No 'cero' ");
}

/* Ejercicio 4 hacer un programa que le pida al usuario ingresar una letra entre A, B, C, D. Si pulsa la letra A en mayúscula o en minúscula le dará un mensaje acertado, en caso contrario le dirá que se equivocó */

let string = prompt("Teclea una letra entre A, B, C , D. ");

if ( string === "a" || string === "A") {

    alert("Felicidades has acertado !!!");
}else {
    alert("Sorry! te equivocaste, vuelve a intentarlo");
}

/* Ejercicio 5 el usuario ingresará 2 números, el programa debe devolver la diferencia entre los 2 números (resta)*/

let number1 = prompt("Escribe un número");
let number2 = prompt("Escribe otro número");
let res = 0;

if(number1 > number2) {

    res = parseInt(number1) - parseInt(number2);
    alert(number1 + " - " + number2 + " es igual a: " + res);
}else {

    res = parseInt(number2) - parseInt(number1);
    alert(number2 + " - " + number1 + " es igual a: " + res);
}

/* Ejercicio 6 dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco o agua, si pide una cerveza o vino se le dirige a la barra y si no pues a la tienda */

let drinks = prompt("¿Qué le gustaría tomar? Vino, Cerveza, Refresco o agua");

if (drinks === "Vino") {

    alert("Por favor vaya a la barra");
}else if (drinks === "Cerveza") {

    alert("Por favor vaya a la barra");
}
else {
    alert("Por favor vaya a la tienda");
}

/* Ejercicio 7 el programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. si va en tren o autobús le recordará que lleve dinero para el billete  */

let transport = prompt("¿En qué vehículo le gustaría viajar?, Coche, Tren, Bicicleta o Autobús");

if(transport === "tren") {

    alert("Lleva dinero para el ticket");
}else if (transport === "autobus") {
    alert("LLeva dinero para el ticket");
}else {
    alert("Buen viaje!!!");
}


/* Ejercicio 8 en un tramo de un rally los conductores no deben ir ni demaisaod rápido ni demasiado lento. este ejercicio debe tomar la longitud del tramoa en kilómetros y el tiempo empleado, si la velocidad está entre 40 y 60 km/hr el conductor pasa la prueba en caso contrario es decalificado */

let km = prompt("¿Cuántos kilometros recorres?");
let hr = prompt("¿En cuánto tiempo recorriste esa distancia?");
let ans = 0;

ans = parseInt(km) / parseInt(hr);
if(ans >= 40 && ans <= 60) {
    alert(ans + " km/h " + "Felicidades pasaste la prueba!!!");
}else {
    alert(ans + " km/h " + "Sorry, estás descalificado!!!");
}

/* Ejercicio 9 una tienda aplica un descuento del 15% para las compras que incluyan mas de 10 artículos iguales cuyo precio sea superior a 40 euros. tu programa debe comprobar y calcular la cabtidad a pagar sabiendo el número de articulos y el precio de cada uno. */

let art = prompt("Ingresa la cantidad de artículos");
let cost = prompt("Costo de los artículos");
let desc = 0.15;
let pay = 0;
let totalPay = 0;

if (art > 10 && cost > 40) {
    
    pay = parseInt(art) * parseInt(cost) * desc;
    totalPay = parseInt(art) * parseInt(cost) - pay;
    alert(art + " " +"artículos, de"+ " " + cost + " " + "euros, -" +" " + desc + " % " + " " + "Total a pagar es: " + " " + totalPay + " " + "euros");
}else {
    pay = parseInt(art) * parseInt(cost);
    alert(art + " " +"artículos, de"+ " " + cost + " " + "euros, " + "Total a pagar es:" + " " + pay + " " + "euros");
}

/* Ejercicio 10 escribe un programa que pida la nota de un estudiante en los 3 trimestres del curso y calcule la nota promedio. el resultado que dará será suspenso si la media es menos a 5, aprobado si esta entre 5 y 7, notable por encima de 7 */

let nota1 = prompt("Ingresa la calificación del 1er trimestre");
let nota2 = prompt("Ingresa la calificación del 2do trimestre");
let nota3 = prompt("Ingresa la calificación del 3er trimestre");
let finalNota = 0;

prom = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
finalNota =  prom / 3;

if(finalNota < 5 ) {
    alert(finalNota + " " + " Suspendido");
}else if(finalNota >= 5 && finalNota <= 7) {
    alert(finalNota + " " + " Aprobado");
}else {
    alert(finalNota + " " + "Notable");
}
