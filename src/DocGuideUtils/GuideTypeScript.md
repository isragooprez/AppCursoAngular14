# STRING EXPLICIT IMPLICIT


console.log("`STRING EXPLICIT IMPLICIT` :::::::::::::::::::::::::::::::");
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

