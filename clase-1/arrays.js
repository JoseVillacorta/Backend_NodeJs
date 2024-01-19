
var numbers = new Array(3);
console.log(numbers);

numbers [0]= 6;
numbers [1]= 96;
numbers [2]= 85;
console.log(numbers);

var arreglo = [-1, 2, 98, "Richard", true, false, 98.6];
console.log(arreglo);
console.log(arreglo[5]);
console.log(arreglo.pop());
console.log(arreglo);
arreglo.push(null);
console.log(arreglo);
console.log(arreglo.at(5));
console.log(arreglo);
console.log(arreglo.length);
arreglo.length = 5;
console.log(arreglo);

//for
console.log("antes del for");
for(var i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}
console.log("despues del while");

//for in
console.log("antes del for in");
for(index in arreglo){
    console.log(arreglo[index]);
}
console.log("despues del for");

var  fecha = "19/01/2024";
var arregloFecha = fecha.split("/");
console.log(arregloFecha);  
console.log(arregloFecha.join("/"));  

