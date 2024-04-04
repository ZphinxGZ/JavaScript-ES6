//Rest Parameter

function summation(...numberArr){
   let total = 0
   
//    for(let i = 0 ;i < numberArr.length;i++){
//         total = total + numberArr[i]
//    } 
//    return total

//เอาสมาชิกใน Array numberArr มาทีละตัวและบวกกับ total
    for(let number of numberArr){
        total = total+number
    }
    return total
}

console.log(summation(500,1000,300))
console.log(summation(500,1000,300,500))
console.log(summation(500,1000,300,500,300))

