const students = [
    { id: 1, name: "sabun" },
    { id: 2, name: "babun" },
    { id: 3, name: "lokkhi" },
    { id: 4, name: "pecha" }
]
const ids = students.map(student => student.id);
console.log(ids);

const names = students.map(student => student.name);
console.log(names);

const meaw = students.filter(students => students.id > 2);
console.log(meaw);

const meaw2 = students.find(students => students.id > 2);
console.log(meaw2);