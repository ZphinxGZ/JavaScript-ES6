//Array Filter
const data = [10,20,30,40]


//กรองข้อมูลและ check ทีละตัว และเก็บลงตัแปร result
let result = data.filter(e =>{
    return e > 20
})
console.log(result.join())



const data1 = [{
    name:"Kunakorn",
    salary:25000,
    department:"programmer"
},{
    name:"jojo",
    salary:30000,
    department:"การตลาด"
},{
    name:"nut",
    salary:10000,
    department:"ฝึกงาน"
},{
    name:"bell",
    salary:50000,
    department:"การตลาด"
},{
    name:"join",
    salary:9000,
    department:"ฝึกงาน"
}]

let result1 = data1.filter(e=>{
    return e.salary > 10000
}).filter(e=>{
    return e.department === "การตลาด"
})
console.log(result1)
