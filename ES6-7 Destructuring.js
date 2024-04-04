//Destructuring (การสลายโคงสร้าง Array)

//Array
const colors = ["เขียว","แดง","เหลือง"]
// const green = colors[0]
// const red = colors[1]
// const yellow = colors[2]

// console.log(green)
// console.log(red)
// console.log(yellow)

//การใช้ Destructuring
// const [,red] = colors
// // console.log(green)
// console.log(red)
// // console.log(yellow)


//Object
const product = {
    productname:"คอมพิวเตอร์",
    price:30000,
    stock:10
}

// const productname = product.productname
// const price = product.price
// const stock = product.stock


//Property:ตัวแปร
const {productname:n,price:p,stock:s} = product

console.log(n)
console.log(p)
console.log(s)

