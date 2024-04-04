//ทำงานกับ Object

let customername = "Kunakorn"
let age = 21
let address = "กทม."
//สามารถใช้ตัวแปรที่กำหนดลงใน Object ได้
const customer = {
    customername: customername,
    age : age,
    address : address,
    showData(){
        console.log("ข้อมูลลูกค้า =",customername)
    }

}

customer.showData()