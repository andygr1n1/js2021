class Person {
    birthYear = 2994

    get age() {
        return 9999 - this.birthYear
    }
}

const Tommy  = new Person()

console.log('Tommy\'s age - ', Tommy.age)