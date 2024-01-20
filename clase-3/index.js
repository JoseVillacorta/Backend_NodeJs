var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello Word");
var num = 10;
var flag = false;
console.log(num);
function sumar(num1, num2) {
    return num1 + num2;
}
console.log(sumar(5, 6));
var a = 5;
//conversion 
var str = a;
//a = "Hola";
var obj = {
    name: "Jose",
    lastanme: "Villacorta",
    age: 20
};
console.log(obj);
var c;
console.log(c);
c = true;
console.log(c);
c = 45;
console.log(c);
c = "hello";
console.log(c);
if (true) {
    var x = 5;
}
console.log(x);
function restar(num1, num2) {
    var resto = num1 - num2;
    return resto;
}
console.log(restar(10, 5));
console.log(a);
console.log(-a);
if (true || false) {
    console.log(true);
}
function calcularImpuesto(monto, igv) {
    if (igv === void 0) { igv = 0.18; }
    return monto * igv;
}
console.log(calcularImpuesto(100, 0.13));
console.log(calcularImpuesto(100));
//POO
var Book = /** @class */ (function () {
    function Book(title, author, isb) {
        this.title = title;
        this.author = author;
        this.isb = isb;
        this.date_published = "20/01/2024";
    }
    Book.prototype.showDuebt = function () {
        console.log("showDuebt");
    };
    Book.prototype.feddBack = function () {
        console.log("feddBack");
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    return Book;
}());
var b1 = new Book("APRENDIENDO A PROGRAMAR", "JORGE VASCONCELOS", "ISBM-123456789");
console.log(b1);
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.area = a;
    }
    return Shape;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(r, a) {
        if (a === void 0) { a = 0; }
        var _this = _super.call(this, a) || this;
        _this.radio = r;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        this.area = (3.14 * this.radio * this.radio) / 2;
    };
    return Circulo;
}(Shape));
var circulo = new Circulo(5);
console.log(circulo);
circulo.calcularArea();
console.log(circulo);
//Interfaces
var cliente = {
    nombre: "Heberth",
    apellido: "Deza",
    saludar: function () {
        return "Hola " + this.nombre + " " + this.apellido;
    }
};
console.log(cliente.saludar());
cliente.nombre = "Joel";
console.log(cliente.saludar());
console.log(cliente);
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, sexo, edad) {
        if (edad === void 0) { edad = 0; }
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }
    Usuario.prototype.saludar = function () {
        return "Hi " + this.apellido;
    };
    return Usuario;
}());
var user = new Usuario("Alex", "Chang", "Varon", 20);
console.log(user);
console.log(user.saludar());
function sumarPuntos(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var p1 = { x: 0, y: 10 };
var p2 = { x: 5, y: -3 };
console.log(sumarPuntos({ x: 10, y: -8 }, p2));
