// funciones anonimas
function saludar(){
    console.log("hola");
    return "mnundo";
}
var saludar = function(){
    console.log("otro saludo");
}
console.log(saludar());

function func2(arg, fn){
    fn(arg);
}

function saludar2(){
    console.log("hola "+nom)
}
//Inmediately invoked Function Expression - IIFE
(function(){
    console.log("estoy dentro de la funcion")
})();
