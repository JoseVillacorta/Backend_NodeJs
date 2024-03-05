console.log("Hola mundo desde Typescript");
var num = 12;
var flag = false;
console.log(num);
function sumar(num1, num2) {
    return num1 + num2;
}
console.log(5, 6);
var obj = {
    name: "Jose",
    lastname: "Villacorta",
    age: 21
};
console.log(obj);
//toma cualquier valor
var c;
console.log(c);
c = 15;
console.log(c);
c = "hola";
console.log(c);
c = true;
console.log(c);
//convertir de tipo de dato
var b = 10;
console.log(b);
var str = b;
str = "hola";
console.log(str);
/*no funciona
function restar(num1:number, num2:number):number{
    var resto = num1-num2;
    return resto;
}
console.log(resto);*/
if (true || false) {
    console.log(true);
}
function calcularImpuesto(monto, igv) {
    if (igv === void 0) { igv = 0.18; }
    return monto * igv;
}
console.log(calcularImpuesto(100, 0.19));
console.log(calcularImpuesto(100));
var fn = new Function("a", "b", "return a*b");
console.log(fn(5, 4));
