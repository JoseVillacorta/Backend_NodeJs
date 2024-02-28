
try { 
    var a = 5
    var b = "hola"
    console.log("antes del error");
    console.log(a*c);
    console.log("final del programa");
} catch (e) {
    console.log("Ocurrio un error de calculo");
}finally{
    console.log("Siempre me voy a ejecutar");
}
console.log("fuera del try");