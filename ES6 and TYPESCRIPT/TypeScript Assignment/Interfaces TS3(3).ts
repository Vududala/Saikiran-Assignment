interface Printable {
    name: string,
    printAll: (string) => string
}
var circle: Printable = {
    name: "Bhushan",
    printAll: (str) => { return "hi" + str }
}
var employee: Printable = {
    name: " Ankush ",
    printAll: (str) => { return "hello" + str }
}
console.log(circle.printAll(circle.name))
console.log(employee.printAll(employee.name))