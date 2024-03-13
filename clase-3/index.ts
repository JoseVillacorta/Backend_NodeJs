console.log("Hola mundo desde Typescript");

var num:number = 12;
var flag:boolean = false;

console.log(num);

function sumar(num1:number, num2:number):number{
    return num1+num2;
}
console.log(5,6); 

var obj = {
    name: "Jose",
    lastname: "Villacorta",
    age: 21
}
console.log(obj);

//toma cualquier valor
var c:any;
console.log(c);
c = 15;
console.log(c);
c = "hola";
console.log(c);
c = true;
console.log(c);

//convertir de tipo de dato
var b = 10;
console.log(b)
var str = <string> <any> b;
str = "hola";
console.log(str);

/*no funciona
function restar(num1:number, num2:number):number{
    var resto = num1-num2;
    return resto;
}
console.log(resto);*/

if(true || false){
    console.log(true);
}

function calcularImpuesto(monto:number, igv:number = 0.18):number{
    return monto*igv;
}

console.log(calcularImpuesto(100, 0.19));
console.log(calcularImpuesto(100));

var fn = new Function("a", "b", "return a*b")

console.log(fn(5,4));

//Programacion Orienta a Objetos
class book {
    private title: string;
    private author: string;
    public isbn: string;
    public date_published: string;

    constructor(title:string, author:string, isbn:string){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.date_published = "12/03/2024";
    }

    shouwDuebt(): void{
        console.log("shouwDuebt");
    }

    feedback(): void{
        console.log("feedback");
    }

    setTitle(title:string):void{
        this.title = title;
    }
    
}

var b1 = new book("Mi planta de naranja", "Jose Vasconcelos", "ISBN-123456789");
b1.isbn = "ISBN-123456789xyz"
b1.setTitle("Mi planta de Marihuana");
console.log(b1);

//Herencia
class Shape{
    area: number;

    constructor(a:number){
        this.area = a;
    }
}

class Circulo extends Shape {
    radio: number;

    constructor(r:number, a:number=0){
        super(a);
        this.radio = r;
    }

    calcularArea():void{
        this.area = (3.1416 * this.radio * this.radio) / 2;
    }
}

var circulo = new Circulo(5);
console.log(circulo);
circulo.calcularArea();
console.log(circulo);

//Interface
interface IPersona{
    nombre:string;
    apellido:string;
    saludar: ()=>string;
}

var cliente:IPersona = {
    nombre: "Jose",
    apellido: "Villacorta",
    saludar:function() {
        return "Hola "+this.nombre+" "+this.apellido;
    }
}

console.log(cliente.saludar());
cliente.nombre = "Fernando";
console.log(cliente.saludar());

class Usuario implements IPersona{
    nombre:string;
    apellido:string;
    sexo:string;
    edad:number

    constructor(nombre:string, apellido:string, sexo:string, edad:number = 0){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }

    saludar():string{
        return "Hi "+this.apellido;
    }
}
var user = new Usuario("Jorge", "Becerra", "Masculino", 16);
console.log(user);
console.log(user.saludar());

interface IPunto2D{
    x:number;
    y:number;
}
function sumarPuntos(p1:IPunto2D, p2:IPunto2D){
    let x = p1.x + p2.x;
    let y = p1.y + p2.y;
    return{x:x, y:y};
}

var p1 = {x:0, y:10};
var p2 = {x:5, y:-3};
console.log(sumarPuntos(p1, p2));