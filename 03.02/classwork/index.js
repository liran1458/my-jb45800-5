function ex01() {
    num = +prompt(`enter number `)
    if (1 <= num && num <= 100) {
        console.log(num)

    }

}
function ex02() {
    num = +prompt(`enter number `)
    if (num % 2 === 1 || num % 4 === 0) {
        console.log(num)

    }

}
function ex03() {
    num = +prompt(`enter number `)
    current = 1
    while (num + 1 != current) {
        if (current % 7 === 0) {
            console.log(`boom`)

        }
        else { console.log(current) }
        current++
    }
}
function ex04() {
    sum = 0
    for (let index = 1; index <= 100; index++) {
        sum = sum + index;
        console.log(sum)

    }
}

function ex05() {

    for (let index = 100; index > 0; index = index - 5) {
        console.log(index)
    }
}
function ex06() {
    num1 = +prompt(`enter number`)
    num2 = +prompt(`enter number`)
    for (let index = num1; index < num2; index++) {
        console.log(index);

    }
}


function ex07() {
    sum = 0
    for (let index = 1; index <= 8; index++) {
        sum = sum + index + 1
        console.log(sum)
    }
}
function ex08() {
    for (let index = 1; index <= 5; index++) {
        console.log(index);

    }

}
function ex09() {
    arr = [92, 82, 72, 62, 52]
    avg = arr.length
    sum = 0

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum = sum + element
        console.log(sum / avg)
        console.log(`============`)


    }

}
// arr = [92, 82, 72, 62, 52]
// arr = [44, 32, 21, 43, 52]
// arr = [70, 67, 55, 21, 32]
stundntsGrades = [
    [92, 82, 72, 62, 52],
    [44, 32, 21, 43, 52],
    [70, 67, 55, 21, 32]]


function ex10() {
    sum = 0
    // for (let index = 0; index < stundntsGrades.length; index++) {
    //     const currentArr = stundntsGrades[index];
    //     // console.log(currentArr)
    //     for (let index = 0; index < currentArr.length; index++) {
    //         const element = currentArr[index];
    //         sum = element + sum

    //     console.log(element)
    //     }

    // }
    // console.log(sum / 15)
    for (const grades of stundntsGrades) {
        // console.log(grades)
        for (grade of grades) {
            console.log(grade)
            sum = grade + sum
        }
        
    }
    console.log(sum / 15)
}
ex10()
console.log(`====`)