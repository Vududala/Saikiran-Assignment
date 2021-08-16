class Person {
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.FullName = function() {
            return this.FirstName + " " + this.LastName;
        }
    }
}


const jsonData = '{"FirstName": "Vududala", "LastName" : "Sai"}';
const x = JSON.parse(jsonData);

var p = new Person("Vududala", "Sai");
console.log(eval(p.FullName() === x.FirstName + " " + x.LastName));