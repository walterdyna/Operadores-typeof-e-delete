/* Operadores typeof e delete

typeof ---> Informa o tipo de operação (Variavel)
delete ---> deleta a informação que não e para aparecer na impressão 

*/
console.log("--------------------------------------------------------------------------------------")
console.log("----------------------------------------typeof----------------------------------------")
const myNumberTypeof = 20
const myStringTypeof = "Ola, sou uma String"

const myObjetoTypeof = {
    name: "ObjetoTypeof",
    age:20,
    heigth:1.70
}

console.log(typeof myNumberTypeof)  //   ---> Imprime a operação Numero
console.log(typeof myStringTypeof)  //   ---> Imprime a operação String
console.log(typeof myObjetoTypeof)  //   ---> Imprime a operação Object

console.log("--------------------------------------------------------------------------------------")
console.log("--------------------------------------------------------------------------------------")


//delete ---> deleta a informação que não e para aparecer na impressão 

console.log("----------------------------------------delete----------------------------------------")

const myObjetoDelete = {
    name: "ObjetoDelete",
    age:20,
    heigth:1.7
}

delete myObjetoDelete.heigth
console.log(myObjetoDelete)

console.log("--------------------------------------------------------------------------------------")


