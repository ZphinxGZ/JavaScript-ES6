//Array Map

// const number = [10,20,30,40]
// console.log(`Array number = ${number}`)

//map Int
// const result = number.map(e => {
//     const a = e*2

//     //a คือ Array ใหม่
//     return a
// })
// //ลดรูป
// const result1 = number.map(e=>e*e)


// console.log(`Array map = ${result}`)
// console.log(`Array map = ${result1.join(" | ")}`)


//map string
// const data = ["ฝนตก","แดดร้อน","พายุ","ฝนฟ้าคะนอง","อากาศดี","เมฆหนา","หมอก"]
// console.log(data)

// let result = data.map((e,i) => {
//     return `วันที่ ${i+1} สภาพอากาศ = ${e}`
// })
// console.log(result)

const data = [{
    day:"01/06/2566",
    weather:"แดดร้อน",
    temp:36
},{
    day:"02/06/2566",
    weather:"ฝนตก",
    temp:32
},{
    day:"03/06/2566",
    weather:"หมอก",
    temp:34
}]

const result =  data.map(e =>{
    return e.weather
})
console.log(`วันที่ : ${result[0]}`)