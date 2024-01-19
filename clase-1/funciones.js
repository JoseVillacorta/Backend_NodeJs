// funciones

function saludar(nombre){
    console.log("Hola, "+nombre);
}
saludar("Fernando");

function sumar(num1, num2){
    let suma = num1 + num2;
    return suma;
}
var resultado = sumar(5,10);
console.log(resultado);

function esMayor(var1, var2){
    return var1>var2;
}
console.log(esMayor(8,10));
console.log(esMayor(15,7));