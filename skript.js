const matFun = prompt ('Оберіть математичну умову: Додати (+), Відняти (-), Розділити (/), Помножити (*)')
const firstNumber = +prompt ('Введіть перше число')
const secondNumber = +prompt ('Введіть друге число')
const result = eval (firstNumber + matFun + secondNumber)
alert (`${firstNumber} ${matFun} ${secondNumber} = ${result}`)+
console.log(firstNumber, matFun, secondNumber, result)