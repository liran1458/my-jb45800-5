function ex01() {
    let n = 0
    while (n < 1000) {
        n = n + 1

        console.log(n)
    }
}

function ex02() {
    let n = 0
    while (n < 1000) {
        console.log(n)
        n = n + 2
    }
}
function ex03() {
    let n = 1001
    while (n < 2000) {
        console.log(n)
        n = n + 2
    }
}

function ex04() {
    let n = 1001
    while (n > 1) {
        n = n - 1
        
        console.log(n)
    }
}
function ex05() {
    let n = 1002
    while (n > 2) {
        n = n - 2
        
        console.log(n)
    }
}
function ex06() {
    let n = 1001
    while (n > 1) {
        n = n - 2
        
        console.log(n)
    }
}
// ex06()
function ex07() {
    n = +prompt(`enter number`)
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }

    }
}
function ex08() {
    n = +prompt(`enter number`)
    let i = 1
    while (n >= i) {
        console.log(i)
        i++

    }
    i = n
    while (1 <= i) {
        console.log(i)
        i--

    }

}
function ex09() {
    n = +prompt(`enter number`)
    n2 = +prompt(`enter 2 number`)
    while (n <= n2) {
        console.log(n)
        n++
    }

}
function ex10() {
    n = +prompt(`enter number`)
    n2 = +prompt(`enter 2 number`)
    if (n <= n2) {
        while (n <= n2) {
            console.log(n)
            n++
        }

    }
    else {
        while (n2 <= n) {
            console.log(n2)
            n2++
        }

    }

}
function ex11() {
    let n = +prompt("enter number")
    let n2 = +prompt("enter 2 number")

    if (n >= n2) {
        while (n >= n2) {
            console.log(n)
            n--
        }
    } else {
        while (n2 >= n) {
            console.log(n2)
            n2--
        }
    }
}
function ex12() {
    let first = +prompt("enter first number")
    let last = +prompt("enter second number")
    let num = +prompt("enter number")

    let start = Math.min(first, last)
    let end = Math.max(first, last)

    for (let i = start; i <= end; i++) {
        if (i % num === 0) {
            console.log(i)
        }
    }
}
function ex13() {
    num = + prompt(`enter number`)
    sum = 0
    counter = 0
    while (num > 0) {
        sum = sum + num
       // counter = counter + 1
        num = +prompt(`enter number`)
        if ( num % 7 === 0) {
            console.log(num)
        }
    }
}
// ex13()
function ex14() {
    let num = +prompt("enter number")

    while (num >= 0) {
        console.log(num ** 3)
        num = +prompt("enter number")
    }
}
function ex15() {
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        let num = +prompt("enter number")
        sum += num
    }

    let avg = sum / 10

    console.log("sum:", sum)
    console.log("average:", avg)
}
function ex16() {
    let max = -Infinity

    for (let i = 1; i <= 10; i++) {
        let num = +prompt("enter number")

        if (num > max) {
            max = num
        }
    }

    console.log("max:", max)
}
function ex17() {
    let min = Infinity

    for (let i = 1; i <= 10; i++) {
        let num = +prompt("enter number")

        if (num < min) {
            min = num
        }
    }

    console.log("min:", min)
}
function ex18() {
    let evenCounter = 0
    let oddCounter = 0
    let num = +prompt("enter number")

    while (num >= 0) {
        if (num % 2 === 0) {
            evenCounter++
        } else {
            oddCounter++
        }

        num = +prompt("enter number")
    }

    console.log("even numbers: ", evenCounter)
    console.log("odd numbers: ", oddCounter)

}
function ex19() {
    let num = +prompt("enter number");
    let sum = 0;

    while (num > 0) {
        sum = sum + num % 10
        num = Math.floor(num / 10)
    }
    console.log(sum)
}
function ex20() {
    let num = +prompt(`enter number`)
    
}
// ex19()