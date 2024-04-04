//Spread Operator กระจายสมาชิกใน Array

const newArr = [100,200,300]
const data = [10,20,...newArr]
const color = ["เขียว","น้ำเงิน","ขาว"]
const allColor = ["แดง","เหลือง"]
//หรือ
allColor.push(...color)

console.log(data)
console.log(allColor)
