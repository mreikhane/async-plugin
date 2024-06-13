let a = 1
let b = 2

setTimeout(() => {
    console.log(3),setTimeout(() => {
        console.log(4),setTimeout(() => {
            console.log(5),setTimeout(() => {
                console.log(6)
            },1000)
        },1000)
    },1000)
},2000)

console.log(a)
console.log(b)

