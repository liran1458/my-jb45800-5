// arr of objects
function ex01() {
    const car1 = {
        model: "mazda",
        year: 2021,
        color: "black"
    }

    const car2 = {
        model: "honda",
        year: 2022,
        color: "white"
    }

    const car3 = {
        model: "kia",
        year: 2023,
        color: "green"
    }

    const cars = [car1, car2, car3];

    for (const car of cars) {
        // console.log(car);

        for (const key in car) {
            const value = car[key]
            console.log(value)
        }
    }
}
function ex02() {
    const clothes = [
        {
            type: `shirt`,
            size: `M`,
            price: 120,
            color: `black`
        },
        {
            type: `suit`,
            size: `S`,
            price: 200,
            color: `green`
        },
        {
            type: `pants`,
            size: `L`,
            price: 150,
            color: `white`
        }
    ]
    for (const i of clothes) {
        // console.log(car);

        for (const key in i) {
            const value = i[key]
            console.log(value)
        }
    }
}

function ex03() {
    const geolocation = [];

    for (let i = 0; i < 3; i++) {
        const latitude = +prompt("enter latitude")
        const longitude = +prompt("enter longitude")

        const location = {
            latitude: latitude,
            longitude: longitude
        }

        geolocation.push(location)
    }

    console.log(geolocation)

}
// functions – Returning a Value
function ex04(arr) {
    let sum = 0
    let avg = 0
    for (const element of arr) {
        sum = element + sum
        avg = sum / arr.length
        // console.log(avg)
    }
    console.log(avg)
    return avg;
}
// ex04([1,2,3,4,5,])
function ex05(arr) {
    const min = Math.min(...arr)
    console.log(min)
    return min;
}
// ex05([1, 2, 3, 4, 5,])
function ex12(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// console.log(ex12(10, 20))
// console.log(ex12(10, 20))
// console.log(ex12(10, 20))
//               =====JSON=====

function ex1() {
    const books = [
        {
            ID: 3213,
            Name: "vinny the pu",
            Author: "liran",
            Price: 40
        },
        {
            ID: 41515,
            Name: "caty the cat",
            Author: "moshe",
            Price: 55
        },
        {
            ID: 4324234234,
            Name: "kaleb the dog",
            Author: "yossi",
            Price: 62.99
        }
    ];

    const jsonString = JSON.stringify(books)
    alert(jsonString);

    const items = JSON.parse(jsonString)

    console.log("books:", books)
    console.log("items:", items)
}
function ex2() {
    const myCat = {
        name: `meow`,
        age: 53,
        color: `orange`,
        isSterile: true
    }
    const jsonString = JSON.stringify(myCat)
    alert(jsonString)
    const yourCat = JSON.parse(jsonString)
    console.log(yourCat)
}

