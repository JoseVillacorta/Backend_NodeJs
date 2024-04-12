
//console.log(fetch("https://google.com.pe"));

console.log("antes del fetch")
fetch("https://google.com")
    .then(response => {return response.text()})
    .catch(error => {console.log("Hay errores: ",error)})
    .then(data => {console.log("Mostrando data: ", data)})
    .finally(()=>{console.log("Se termino la promesa")});

console.log("Despues del fetch")    

console.log("antes del fetch await");
const response = await fetch("https://google.com");
const data = await response.text();
console.log(data);
console.log("Despues del fetch await");

