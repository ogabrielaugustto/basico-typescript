// string, boolean, number
let x: number = 10;
x = 20;
console.log(x);

// inferencia
let y = 12;

// annotation
let z: number = 12;

// tipo basicos"
let firtName: string = "Gabriel";
let age: number = 30;
const isAdmin: boolean = true;

// String != string
console.log(typeof firtName);
firtName = "Pedro";
console.log(firtName);

// object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
//  console.log(myNumbers.toUpperCase); Verifica o erro
console.log(firtName.toUpperCase);
myNumbers.push(5);
console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]];
myTuple = [10, "teste", ["alou", "foi em"]];
console.log(myTuple);

// object literals -> {prop: value}
const user: { name: string; age: number } = {
  name: "Gabriel",
  age: 21,
};

console.log(user);
console.log(user.name);
console.log(user.age);

let a: any = 0;

a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";

id = 200;

// type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// enum
// tamanho de roupas (size: medio, size: pequeno)
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa gola V",
  size: Size.G,
};

console.log(camisa);

// literal types
let teste: "algumvalor" | null;
teste = "algumvalor";
teste = null;

// funcoes
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(2, 8));

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("Gabriel"));

function logger(msg: string): void {
  console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string) {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  }
  console.log(`Olá ${name}`);
}

greeting("Gabriel!");
greeting("Gabriel!", "Augusto  ");

// interface

interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumber(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
};

console.log(multiplyNumber(someNumbers));

// narrowing
// checagem tipo
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número ${info}`);
    return;
  }
  console.log("Não foi passado um número!");
}

doSomething(5);
doSomething(true);

// generics
function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

// classes
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }

  showUserRole(canShow: boolean) {
    if (canShow) {
      console.log(`Este usuário é ${this.role}`);
      return;
    }
    console.log("Acesso negado!");
  }
}

const zeca = new User("Zéca", "Admin", true);

console.log(zeca);

zeca.showUserName();

zeca.showUserRole(false);

// interfaces em classes
interface IVehicle {
  brand: string;
  showBrand(): void;
}

class Car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`Marca: ${this.brand}`);
    console.log(`Aro: ${this.wheels}`);
  }
}

const fusca = new Car("Vw", 39);

fusca.showBrand();

//  heranca
class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();

// decorators
function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor{
      id = Math.random();
      createdAt = new Date();
    }
  };
}


@BaseParameters() // decorators sao chamados com @
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");
console.log(sam);
