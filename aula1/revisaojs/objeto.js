let person = {
  name: "July",
  age: 12,
  height: 1.55,
  ocupation: "student",
};
//adicionando um novo atributo
person.weight = 50;
console.log(person.weight);

//adicionando outro atributo
let campo = "sex";
person[campo] = "female";
console.log(person.sex);
//mostrando os atributos
console.log(person);
console.log(person.name + " is a " + person.ocupation);

for (const key of Object.keys(person)) {
  console.log(key);
}

// Object.keys
// Object.values
// Object.entries
let anotherPerson = person;
anotherPerson.name = "Lucio";
console.log(anotherPerson.name);
console.log(person.name);
console.log(person.sex);