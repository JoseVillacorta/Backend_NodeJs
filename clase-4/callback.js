
function saludar(){
    console.log("Hola mundo");
}

console.log("Antes de ejecutar el setTimeout");
setTimeout(saludar, 5000);
console.log("Despues de ejecutar el setTimeout");
setTimeout(()=>{
    console.log("Hola desde setTimeout");
}, 3000);
console.log("Despues de ejecutar el setTimeout2");