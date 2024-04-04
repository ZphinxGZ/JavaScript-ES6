//การ loop Array
//for Loop, ForEach , ForOf

const data = [10,20,30,40,50]

for(let i = 0;i < data.length;i++){
    if (data[i]>= 30) {
        break
        console.log(`index ที่ ${i} มีค่า = ${data[i]}`)
    }  
}


//หาผลรวมแต่ละรอบ
let sum = 0
data.forEach(e => {
    sum = sum + e
    console.log(`ผลรวม = ${sum}`)
});


for(const ele of data){
    if (ele >= 30) break
    console.log(`สมาชิก Array Data = ${ele}`)
}
