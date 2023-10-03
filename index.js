let students = [
    {
        name: "baxtzod",
        age: 15,
        isMarried: false,
        hair_color: "blue"
    },
    {
        name: "islom",
        age: 15,
        isMarried: true,
        hair_color: "red"
    },
    {
        name: "safir",
        age: 15,
        isMarried: false,
        hair_color: "lisiy"
    },
    {
        name: "abdumanon",
        age: 13,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "xojimurod",
        age: 16,
        isMarried: true,
        hair_color: "pink"
    },
    {
        name: "aziza soliyeva",
        age: 15,
        isMarried: true,
        hair_color: "green"
    },
    {
        name: "aziza",
        age: 15,
        isMarried: false,
        hair_color: "skyblue"
    },
    {
        name: "ismoil",
        age: 12,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "artyom",
        age: 14,
        isMarried: false,
        hair_color: "purple"
    },
    {
        name: "abdukhafiz",
        age: 17,
        isMarried: false,
        hair_color: "white"
    },
    {
        name: "bobur",
        age: 18,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "shoxa",
        age: 17,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "alSafir",
        age: 15,
        isMarried: true,
        hair_color: "orange"
    },
]

let sort = students.sort((a,b) => a.age-b.age)
let sort2 = students.filter(student => student.isMarried).map(student => student.name);
let sort3= students.filter(student => !student.isMarried).map(student => student.name);
let sort4 = students.filter((a,b) =>{
    if(a.age < b.age){
        return a 
    } else{
        return b
    }
})

console.log(sort4)
console.log(sort2);
console.log(sort3);
console.log(sort);

// 1. Отсортировать массив по нарастанию возраста 
// 2. Распледелить женатых и не женатых в разные массивы должны быть только имена 
// 3. Найти самого старшего 
// 4. Найти самого младшего