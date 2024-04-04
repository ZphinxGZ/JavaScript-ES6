//Arrow Function

//แบบเดิม
function fullname(fname,lname){
    return fname+lname
}

//แบบใหม่
fullname = (fname,lname) => fname+lname


//แบบเดิม
function setAge(age){
    return "อายุ = "+age
}
//แบบใหม่
setAge = (age) => "อายุ = "+age


//แสดงผล
console.log(fullname("kunakorn ","khamcharoen"))
console.log(setAge(20))
