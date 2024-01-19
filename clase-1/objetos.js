// objeto
let persona = {
    'nombre' : "Jose",
    'apellido' : "Villacorta",
    'edad' : 20,
    'sexo' : 'M',
    'masculino' : true,
    'femenino' : false,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona.nombreCompleto());  

//clase
class Persona{
    nombre;
    apellido;
    edad;
    direccion;

    //metodo constructor
    constructor(nombre, apellido, edad, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
    }
    
    saludar() {
        return "hola";
    }
}

//acceder a propiedades de un objeto
for(propiedad in persona){
    console.log(propiedad);
}
//acceder a valores de un objeto
for(propiedad in persona){
    console.log(persona[propiedad]);
}

//clase
let p1 = new Persona("Fernando", "Tafur", 20, "Av. Industrial");
console.log(p1);