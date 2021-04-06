let a = 1
let b = 42
let c = 78000

if (a) {
    a = b
}
console.log(a)

a && (a = c)
console.log(a)

a &&= b
console.log(a)

a ||= b
a ??= b