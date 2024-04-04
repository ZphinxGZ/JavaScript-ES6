//push pop shift unshift
const data = [100,200,300]
console.log(data)

//**********.push(value) เพิ่มข้อมูลเข้าข้างหลัง array
data.push(500)
//สามารถ push array ได้
//ใช้ Spread Operator กระจายสมาชิกใน Array ได้
data.push(...[10,20])
console.log("push :",data)

//**********.pop() เอาข้อมูลข้างหลังออกจาก array
data.pop()
console.log("pop :",data)

//**********.shift() เอาข้อมูลข้างหน้าออกจาก array
data.shift()
console.log("shift :",data)

//**********.unshift(value) เพิ่มข้อมูลเข้าข้างหน้า array
data.unshift(10)
console.log("unshift :",data)