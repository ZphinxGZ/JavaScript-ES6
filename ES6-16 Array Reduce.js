//Array Reduce
const data = [10,20,30,40]

const mapdata = data.map(e=>100)
console.log(mapdata)

const filterdata = data.filter(e => {
    return e > 20
})
console.log(filterdata)

//Array.reduce((ค่าที่ถูกประมานผล,Element)=>{},ค่าเริ่มต้น)
//value = 0
//total = 10+0
//return total
//วนลูปจนหมด Array
const reducedata = data.reduce((value,e)=>{
    console.log(value)
    const total = e+value
    return total
},0)

console.log(reducedata)

const cart = [
    {name:"กระเป๋า",price:2000},
    {name:"หนังสือ",price:5000},
    {name:"กล้องถ่ายรูป",price:5000}]

let sum = cart.reduce((value,e)=>{
    const total = e.price+value
    return total
},0)

console.log("ซื้อสินค้าทั้งหมด",sum,"บาท")
