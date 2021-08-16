class Person {
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.FullName = function() {
            return this.FirstName + " " + this.LastName;
        }
    }
}

var p = new Person("Vududala", "Sai");
console.log(eval(p.FullName() === "Vududala Sai"));