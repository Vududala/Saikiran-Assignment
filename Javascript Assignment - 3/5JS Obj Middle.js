var p = {
    FirstName: "VUDUDALA",
    LastName: "SAI"
}

class Person {
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
}

console.log(p.MiddleName);
p.MiddleName = "KIRAN";
console.log(p.MiddleName);