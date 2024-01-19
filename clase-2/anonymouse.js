
function saludar(){
    console.log("Hola");
    return "mundo";
}

saludar = function(){
    console.log("otro saludo");
}

console.log(saludar());

function func2(arg, fn){
    fn(arg);
}

function saludar2(nom){
    console.log("hola"+nom)
}

//Inmediately invoked Function Expression - IIFE
(function(){
    console.log("estoy dentro de una funcion")
})();