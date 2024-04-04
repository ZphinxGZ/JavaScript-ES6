//ค้นหาข้อมูลใน Array

//indexOf(value) = ผลการค้นหาจำได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(value) = ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undifined
//findIndex(value) = ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าไม่เจอจะได้ -1

const colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]

//indexOf(value) = ผลการค้นหาจำได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
let index = colors.indexOf("แดง")
console.log(index)

//find(value) = ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undifined
const search = colors.find(element => element === "เขียว")
console.log(search)

//findIndex(value) = ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าไม่เจอจะได้ -1
const search1 = colors.findIndex(element => element === "เขียว")
console.log(search1)