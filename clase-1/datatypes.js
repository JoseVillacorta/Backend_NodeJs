var num1 = 20;
var num2 = 5;

//Operaciones en tipos de datos numéricos
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1**num2);
console.log(num1/num2);
console.log(num1%num2);
//console.log(++num1);
//console.log(num1++);
//console.log(num1);
//console.log(--num1);

var nombre = "Jose";
var apellido = "Villacorta";
console.log(nombre+" "+apellido);

// Condicioneles
console.log(num2>num1);
if(num2>num1){
    console.log("num2 es mayor");
}else if(num1%num2 == 0){
    console.log("no hay residuo");
}else if(num1**num2 < 100){
    console.log("no supera los 1000");
}else {
    console.log("num1 es mayor");
}
//Salta Aqui
if(num1>num2){
    console.log("num1 es mayor");
}
if(num1%num2 == 0){
    console.log("no hay residuo");
}
if(num1**num2 < 1000){
    console.log("no supera 1000");
}else{
    console.log("supera 1000");
}

var igual = num1 == num2?"Si es igual" : "No es igual"
console.log(igual);

num3 = 20;

if(num1 === num3){
    console.log("Es igual");
}else{
    console.log("No es igual");
}



