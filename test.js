
//console.log('Hello world')
//Const: không thể thay đối kiểu dữ liệu nguyên thuỷ nhưng dạng obj thì thay đổi đc giá trị bên trong
//Number
let songuyen = 5
let sothuc = 3.14
let numberkhoahoc = 1e6 //số viết dưới dạng khoa học output:1000000
//Boolean
let isLoggedin = false
let isLoggedin1 = true

//String
let fistName = 'Nhan'
let lastName = 'Huu'
console.log(`Xin chào ${lastName} ${fistName}`)
 
 
//Null
let ur = null
//Undefined
let urr
//Object
let user = {
    nam: 'Nhân',
    age: 20,
    isStudent: true
}
user.isStudent = false //gán lại giá trị chi isStudent


////bài tập thực hành
// Bài tập thực hành: 
// Tạo một chương trình tính tổng hai số được nhập từ người dùng và in kết quả ra console.

// lệnh nhập: prompt()
// let a = Number(prompt())
// let b = Number(prompt())
// console.log(`a + b = ${a+b}`);





///các cách khai báo của HÀM
//cách 1
function namefunction(name) {
    console.log(`xin chào ${name}`)
} 
namefunction('Nhân')
//cách 2
const namefunction1 = function (name) {
    console.log(`xin chào ${name}`)
} 
namefunction1('Nhân')
//cách 3
const  namefunction2 = (name = 'Tham số mặc định dùng cho trường hợp nếu như chúng ta không truyền tham số nào vô') => {
    console.log(`xin chào ${name}`)
} 
namefunction2()

///làm việc với MẢNG
const arr = ['một', 'hai', 'ba']
for (let i=0; i< arr.length; i++){ //duyệt theo element
    console.log(arr[i])
}
for (let value of arr){ //duyệt theo element
    console.log(value)
}
for (let value in arr){ //duyệt theo index
    console.log(value)
}
arr.forEach((value) => { //duyệt theo element
    console.log(value)
})

