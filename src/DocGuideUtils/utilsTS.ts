console.log("STRING EXPLICIT IMPLICIT :::::::::::::::::::::::::::::::");
let firstName: string = "Dylan"; // type string
//firstName = 33;
console.log(typeof firstName);
console.log(firstName)
let secondName: string = "Isragoo.prez";
console.log(secondName);


let firstName1 = "Dylan"; // inferred to type string
//firstName1 = 33;
console.log(firstName1);

console.log("JSON :::::::::::::::::::::::::::::::::::::::::::");

const json= JSON.parse("55")
console.log(typeof json);
console.log(json);

console.log("ANY  :::::::::::::::::::::::::::::::::::::::::::");

let v:any = true
console.log(typeof v);
console.log(v);
v="PREZ"
console.log(v);

console.log("UNKNOWN :::::::::::::::::::::::::::::::::::::::::::");

let w: unknown=1;
w="string";
w={
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
}as { runANonExistentMethod:()=> void}

if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
console.log("ARRAY :::::::::::::::::::::::::::::::::::::::::::");

const names:  string[]=[]
names.push("Santiago");
names.push("Perez");
names.push("isragoo");
names.push("prez");
console.log(names);
console.log("Readonly Tuple :::::::::::::::::::::::::::::::::::::::::::");
const Letras: readonly string[]=["a","b","c","d"]
console.log(Letras);

console.log("Readonly Tuple :::::::::::::::::::::::::::::::::::::::::::");
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
console.log(ourTuple);

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
console.log(ourReadonlyTuple);

console.log("Named Tuples :::::::::::::::::::::::::::::::::::::::::::");
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);
const graph1: [number, number] = [55.2, 41.3];
const [x, y] = graph1;
console.log(graph1);


//Index Signatures
console.log('////Index Signatures  ::::::::::::::::::::::::::::::::::::::::');

const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

car.type='susuki';
car.model='sedan';
car.year=2010;
console.log(car);

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
console.log(nameAgeMap);

const cars: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
cars.mileage = 2000;
console.log(cars);

//Numeric Enum
console.log('//Numeric Enum   ::::::::::::::::::::::::::::::::::::::::');
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection1 = CardinalDirections.North;
let currentDirection2 = CardinalDirections.East;
console.log(currentDirection1);
console.log(currentDirection2);

//TypeScript Type Aliases and Interfaces

console.log('//TypeScript Type Aliases and Interfaces  ::::::::::::::::::::::::::::::::::::::::');


type CarYear = number
type CarType = string
type CarModel = string
type Carro = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const carro: Carro = {
  year: carYear,
  type: carType,
  model: carModel
};
console.log(carro);

interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

console.log(rectangle);

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

console.log(coloredRectangle);

//Union | (OR)
console.log('//Union | (OR)  ::::::::::::::::::::::::::::::::::::::::');

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');


//TypeScript Functions
console.log('//TypeScript Functions  ::::::::::::::::::::::::::::::::::::::::');

function getTime(): number {
  return new Date().getTime();
}

console.log('function printHello: '+getTime());


function printHello(): void {
  console.log('Hello!');
}
console.log('function printHello: '+printHello());

function multiply(a: number, b: number) {
  return a * b;
}

console.log('function multiply: '+multiply(8,6));

function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log('function add: '+add(4,8));
console.log('function add: '+add(4,8,6));

//Casting with as
console.log('//Casting with as  ::::::::::::::::::::::::::::::::::::::::');
let x: unknown = 'hello';
console.log(('Casting: '+x as string).length);

let x2: unknown = 4;
console.log((x2 as string).length);

let x3: unknown = 'hello';
console.log((<string>x3).length);

let x4 = 'hello';
console.log(((x4 as unknown) as string).length);


//TypeScript Classes

console.log('////TypeScript Classes  ::::::::::::::::::::::::::::::::::::::::');

class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";

console.log(person);



class Person1 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person1 = new Person1("Jane");
console.log(person1.getName());
//console.log(person1.name); // person.name isn't accessible private

class Person2 {
  // name is a private member variable
  public constructor(private name: string, public apellido: string, protected edad:string) {
    console.log('Accesible solo dentro de la clase. '+edad);
  }

  public getName(): string {
    return this.name;
  }



}

const person2 = new Person2("SANTIAGO", "PEREZ","33");
console.log(person2.getName());
console.log(person2.apellido);




class Person3 {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("CARLOS");
console.log(person3.getName());

interface Shape {
  getArea: () => number;
}

class Rectanglet implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectanglet(10,20);

console.log('getArea por implement interface: '+myRect.getArea());


//Override
console.log('Override :::::::::::::::::::::::::::::::::::::::::::::');

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

//const Square rec= new Square(5);
//console.log('Override: '+rec.toString());



//Abstract Classes
console.log('Abstract Classes :::::::::::::::::::::::::::::::::::::::::::::');
abstract class Polygonabs {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangleabs extends Polygonabs {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

//const Rectangleabs recabs= new Rectangleabs(8,9);
//console.log('Rectangleabs: '+recabs.getArea());


//Functions
console.log('Functions :::::::::::::::::::::::::::::::::::::::::::::');

function createPair<S,T>(v1:S, v2:T):[S,T]{
  return [v1,v2];
}

console.log(createPair<string, number>('hello',42));

//Classes
console.log('Classes :::::::::::::::::::::::::::::::::::::::::::::');

class NamedValue<T>{

  private _value: T | undefined;

  constructor(private name:string){}

  public setValue(value:T){
    this._value=value;
  }

  public getValue(): T| undefined{
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }

}

let value= new NamedValue<number>('myNumber');
value.setValue(10);
console.log('CLASSES: '+value.toString());




//Partial
console.log('Partial :::::::::::::::::::::::::::::::::::::::::::::');

interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

console.log('Partial: '+pointPart.x);

//Required
console.log('Required :::::::::::::::::::::::::::::::::::::::::::::');

interface Carx {
  make: string;
  model: string;
  mileage?: number;
}

let myCarx: Required<Carx> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

console.log('Required: '+myCarx);


//Record
console.log('Record :::::::::::::::::::::::::::::::::::::::::::::');

const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

console.log('Record: '+nameAgeMap);


//Omit
console.log('Omit :::::::::::::::::::::::::::::::::::::::::::::');
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here
};

console.log('Omit: '+bob);

//Pick
console.log('Pick :::::::::::::::::::::::::::::::::::::::::::::');
interface Personx {
  name: string;
  age: number;
  location?: string;
}

const bobx: Pick<Personx, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log('Pick: '+bobx.name);

//Exclude
console.log('Exclude :::::::::::::::::::::::::::::::::::::::::::::');
type Primitive = string | number | boolean
const valueg: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

console.log('Exclude: '+typeof valueg);

//Parameters
console.log('Parameters :::::::::::::::::::::::::::::::::::::::::::::');
type PointPrinter = (p: { x: number; y: number; }) => void;
const point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};

console.log('Parameters: '+point);





