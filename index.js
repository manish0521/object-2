function  DFA(name, sex, term, status) {
    this.name = name
    this.sex = sex
    this.term = term
    this.status = status
}

let myDFA1 = new DFA("Manish", "male", "Term-2", "Students")
let myDFA2 = new DFA("Anthony", "male", "NA", "Faculty")
let myDFA3 = new DFA("David", "male", "Term-2", "Students")
let myDFA4 = new DFA("Ginny", "female", "Term-2", "Faculty")

console.log(myDFA1)
console.log(myDFA2)
console.log(myDFA3)
console.log(myDFA4)