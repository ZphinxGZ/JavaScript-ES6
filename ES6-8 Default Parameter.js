//Default Parameter
getDataCustomer = (customerName,customerAddress = "กทม.") => {
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAddress}`
    return address
}

console.log(getDataCustomer("คุณากร","กทม."))
console.log(getDataCustomer("โจโจ้"))