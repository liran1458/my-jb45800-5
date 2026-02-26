function ex01() {
    let names = []
    for (let i = 0; i < 5; i++) {
        name1 = prompt(`enter name`);
        names.push(name1)
    }
    // console.log(names[0], names[4])
    console.log(names)

    for (const name2 of [...names].reverse()) {

        console.log(name2)

    }
    console.log(names)
}
function ex02() {
    let songs = []
    for (let i = 0; i < 3; i++) {
        song = prompt(`enter song`);
        songs.push(song)
    }
    console.log(songs)
    songs.splice(1, 1)
    console.log(songs)
}
function ex03() {
    let grades = []
    for (let i = 0; i < 10; i++) {
        let grade = +prompt("enter grade")
        grades.push(grade)
    }
    let wrongGrades = [] 

    for (const g of grades) {
        if (g < 0 || g > 100) {
            wrongGrades.push(g)
        }
    }

    if (wrongGrades.length === 0) {
        console.log("all grades are valid:", grades)
    } else {
        console.log("invalid grades:", wrongGrades)
        console.log(`this is the valid gardes:`, grades)
    }
}

// ex03()
