console.log('hello world');
function ex01() {
    num = +prompt('enter number');
    console.log(num * num)

}

console.log("========")
function ex02() {
    firstNum = +prompt("enter 1st number")
    secNum = +prompt("enter 2nd number")
    threeNum = +prompt("enter 3rd number")
    result = firstNum * secNum * threeNum
    console.log(result);

}
console.log("========")
function ex03() {
    firstNum = +prompt("enter 1st number")
    secNum = +prompt("enter 2nd number")
    result = firstNum / secNum
    console.log(result)
}
console.log("========")
function ex04() {
    firstName = prompt("enter your name")
    lastName = prompt("enter your last name")
    email = prompt("enter your email")
    phoneNum = prompt("enter your number")
    const result = "full name:" + firstName + " " + lastName +" "+" email:"+ email + " " + "phone number:" + phoneNum
    alert(result)
}
console.log("========")
function ex05() {
   const num = +prompt("enter number with at list 2 digit")
   newNum = num % 10
    console.log(newNum)
}
console.log("========")
function ex06() {
     firstNum = +prompt("enter 1st number")
    secNum = +prompt("enter 2nd number")
    threeNum = +prompt("enter 3rd number")
    fourNum = +prompt("enter 4th number")
    result= firstNum + secNum + threeNum + fourNum
    console.log(result);
    
}
console.log("========")
function ex07() {
     firstNum = +prompt("enter 1st number")
    secNum = +prompt("enter 2nd number")
    threeNum = +prompt("enter 3rd number")
    result= firstNum * secNum * threeNum
    console.log(result)
    
}
console.log("========")
function ex08() {
    r = +prompt("enter 1st number")

     const circumference = 2 * Math.PI * r;
    const area = Math.PI * r * r;

    console.log("Circumference:", circumference);
    console.log("Area:", area); 
}
console.log("hola")

