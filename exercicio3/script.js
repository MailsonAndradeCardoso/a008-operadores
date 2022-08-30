//Exercicio 3 (Aula a008)

//#a

let a = 5
let b = 20
let c = 2

let operacaoA = a > b && a < 2
console.log(operacaoA)
//tabela verdade (false+false = false)

//#b

let operacaoB = a === 5 || a === "5"
console.log(operacaoB)
//tabela verdade (true+false = false)

//#c

let operacaoC = !(b > 50)
console.log(operacaoC)
//tabela verdade (negação false = true)

let operacaoD = !(20 > 50 || 50 > 60)
console.log(operacaoD)
//tabela verdade (negação false+false = true)


