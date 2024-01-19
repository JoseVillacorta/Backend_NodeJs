// Encontrar valor mayor y menor de una arreglo 

// Primera forma en encontrar
var numeros = [8,6,67,6,23,-5,100,8,180];

// Valor minimo
var min = numeros[0]; 
for(let i = 1; i<numeros.length; i++){  
    if(numeros[i]<min) 
       min=numeros[i];
}

// Encontrar el valor máximo
var max = numeros[0];
for (let j = 1; j < numeros.length; j++) {
    if (numeros[j] > max)
        max = numeros[j];
}

console.log("El valor minimo es: " + min); 
console.log("El valor máximo es: " + max);


// Segunda forma en encontrar

console.log(numeros);

var mayor = -99999;
var menor = 99999;

for(let i of numeros){
    console.log(i);
    if(i<mayor)
        mayor = i;
    if(i<menor)
        menor = i;
}

console.log("El valor mayor del arreglo es: " + mayor);
console.log("El valor menor del arreglo es: " + menor);