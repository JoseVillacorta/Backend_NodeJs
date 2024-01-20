console.log("Hello Word");

var num : number = 10;
var flag: boolean = false;

console.log(num);

function sumar(num1, num2){
    return num1+num2;
}
console.log(sumar(5,6));

var a = 5;
//conversion 
var str = <string><any> a;
//a = "Hola";

var obj = {
    name : "Jose",
    lastanme : "Villacorta",
    age : 20
}
console.log(obj);

var c : any;
console.log(c);
c = true;
console.log(c);
c = 45;
console.log(c);
c = "hello";
console.log(c);

if(true){
    var x = 5;
}
console.log(x);

function restar(num1:number, num2:number):number{
    var resto = num1 - num2;
    return resto;
}

console.log(restar(10,5));

console.log(a);
console.log(-a);

if(true || false){
    console.log(true)
}

function calcularImpuesto(monto:number, igv:number=0.18):number{
    return monto*igv;
}
console.log(calcularImpuesto(100,0.13))
console.log(calcularImpuesto(100))

//POO
class Book{
    private title : string;
    private author : string;
    public isb : string;
    public date_published : string;

    constructor(title:string, author:string, isb:string){
        this.title = title;
        this.author = author;
        this.isb = isb;
        this.date_published = "20/01/2024";
    }

    showDuebt():void{
        console.log("showDuebt");
    }

    feddBack():void{
        console.log("feddBack");
    }

    setTitle(title:string):void{
        this.title = title;
    }
}

var b1 = new Book("APRENDIENDO A PROGRAMAR", "JORGE VASCONCELOS", "ISBM-123456789");
console.log(b1);

class Shape{
    area: number;

    constructor(a:number){
        this.area = a;
    }
}

class Circulo extends Shape{
    radio : number

    constructor(r: number, a:number=0){
        super(a);
        this.radio = r;
    }

    calcularArea():void{
        this.area = (3.14*this.radio*this.radio)/2;
    }
}

var circulo = new Circulo(5);
console.log(circulo);
circulo.calcularArea();
console.log(circulo);

//Interfaces 
interface IPersona {
    nombre:string;
    apellido:string;
    saludar: ()=>string;
}
//Interfaces
var cliente = {
    nombre: "Heberth",
    apellido: "Deza",
    saludar: function(){
        return "Hola "+this.nombre+" "+this.apellido;
    }
}
console.log(cliente.saludar());
cliente.nombre = "Joel";
console.log(cliente.saludar());
console.log(cliente)

class Usuario implements IPersona {
    nombre: string;
    apellido: string;
    sexo:string;
    edad: number;

    constructor(nombre:string, apellido:string, sexo:string, edad:number = 0){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }

    saludar():string{
        return "Hi "+this.apellido;
    }
}

var user = new Usuario("Alex", "Chang", "Varon", 20);
console.log(user);
console.log(user.saludar());

interface IPunto2D {
    x:number;
    y:number;
}

function sumarPuntos(p1:IPunto2D, p2:IPunto2D){
    let x = p1.x + p2.x;
    let y = p1.y + p2.y
    return {x:x,y:y};
}

var p1 ={x:0, y:10};
var p2 = {x:5, y:-3};
console.log(sumarPuntos({x:10,y:-8},p2))
