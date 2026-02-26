function ex01() {
    num1 = +prompt(`enter first number`)
    num2 = +prompt(`enter sec number`)

    if (num1 > num2) {
        alert(num1)
    }
    else alert(num2)
}
function ex02() {
    num1 = +prompt(`enter first number`)
    if (num1 > 100 || num1 < 0) { alert('wrong value') }
    else {
        isPass = num1 >= 60
        if (isPass) {
            alert(`you'r pass`)
        } else {
            alert(`you'r falied`)
        }
    }
}
function ex03() {
    age = +prompt(`enter you'r age `)
    seniorCity = age >= 65
    teen = age < 18
    kid = age < 13
    if (seniorCity) {
        alert(`free for you`)
    } else if (teen) {
        alert(`25 sh`)
    } else if (kid) {
        alert(`ma kore`)
    }
    else {
        alert(`you are adult`)
    }
}
function ex04() {
    num1 = +prompt(`enter first number`)
    num2 = +prompt(`enter sec number`)
    alert(num1 > num2 ? `${num1} is bigger one ` : `${num2} is bigger one`)
}
function ex05() {
    num = +prompt(`enter number`)
    alert(num)
    alert(num + 1)
    alert(num + 2)
    alert(num + 3)
    alert(num + 4)
    alert(num + 5)
}
function ex06() {
    num = + prompt(`enter number`)
    while (num > 0) {
        alert(num ** 2)
        num = + prompt(`enter number`)
    }
}
function ex07() {
    num = + prompt(`enter number`)
    sum = 0
    while (num > 0) {
        sum = sum + num
        num = + prompt(`enter number`)

    }
    alert(sum)
}
function ex08() {
    num = + prompt(`enter number`)
    sum = 0
    counter = 0
    while (num > 0) {
        sum = sum + num
        counter = counter + 1
        num = +prompt(`enter number`)
    }
    alert(sum / counter)
}
function ex09() {
    sumOfCandles = 0
    currentDay = 1
    while (currentDay < 9) {
        candlesPerDay = 1 + currentDay
        sumOfCandles = candlesPerDay + sumOfCandles
        currentDay = currentDay + 1
    }
    alert(sumOfCandles)
}
