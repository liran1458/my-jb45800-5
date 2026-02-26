
function ex1() {
    users = [
        {
            id: '22',
            name: 'Moshe',
            following: ['24']
        }, {
            id: '23',
            name: 'Eilat',
            following: []
        }, {
            id: '24',
            name: 'Golan',
            following: ['22', '23']
        }
    ]
    let id = prompt(`enter id`)

    for (const user of users) {
        if (user.id == id) {
            console.log(user)
            for (followingId of user.following) {
                console.log(followingId)
            }


        }

    }
}
// students = [
//     {
//         name: 'moshe',
//         grades: [99, 88, 77]
//     }, {
//         name: 'yossi',
//         grades: [77, 33, 55]
//     }, {
//         name: 'eli',
//         grades: [77, 66, 55]
//     }
// ]
// sum = 0
// count = 0
function ex() {
    let age = +prompt(`enter your age`)
    function printPrice2(price) {
        console.log(`welcome to our pool ${price} sh`)
    }
    function printPrice(a) {
        if (a <= 6) {
            printPrice2(0)
        }
        else if (a <= 12) {
            printPrice2(20)
        }
        else if (a <= 18) {
            printPrice2(50)
        }
        else if (a < 65) {
            printPrice2(100)
        }
        else { printPrice2(20) }
    }
    printPrice(age)
}
// ex()
function ex2() {
    let num = +prompt(`enter num`)
    function oddOrEven(num) {
        // if (num % 2 === 0) {
        //     console.log(`${num} is even`)
        // } else { console.log(`${num} is odd`) }
        console.log(num % 2 === 0 ? (`${num} is even`) : (`${num} is odd`))
    }
    oddOrEven(num)

}
function ex3() {
    function calc(a, b) {
        return {
            plus: a + b,
            minus: a - b
        }
    }
    console.log(calc(1, 3));
}

