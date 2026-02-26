function ex01() {
    let url = prompt("enter URL")
    if (url.endsWith("/")) {
        url = url.slice(0, -1);
    }



    const parts = url.split('.')

    let ending;
    if (parts[parts.length - 1] === "il") {
        ending = "." + parts.slice(-2).join('.');
    } else {
        ending = "." + parts[parts.length - 1];
    }

    console.log("the ending is :", ending);

}
// ex01()

function ex02() {
    const fileName = prompt("enter file url:");

    const parts = fileName.split('.');
    const ending = parts[parts.length - 1].toLowerCase();

    const imageEndings = ["jpg", "jpeg", "png", "gif", "tiff", "bmp", "webp"];

    if (imageEndings.includes(ending)) {
        console.log("the file is pic and the ending is: " + ending);
    } else {
        console.log("the file isn't a image");
    }

}
function ex03() {
    const phoneNum = prompt("enter phone number");

if (phoneNum.length !== 10) {
    console.log("not ok");
    return;
}
if (!/^\d+$/.test(phoneNum)) {
    console.log("not ok");
    return;
}
if (phoneNum.startsWith("05")) {
    console.log("ok");
} else {
    console.log("not ok");
}
}
function ex04() {
    const password = prompt("Enter password")

let errors = []


if (password.length < 6) {
    errors.push("Password is too short")
}

if (!/[A-Z]/.test(password)) {
    errors.push("Missing uppercase letter")
}
if (!/[a-z]/.test(password)) {
    errors.push("Missing lowercase letter")
}
if (!/[0-9]/.test(password)) {
    errors.push("Missing digit")
}
if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push("Missing special character")
}
if (errors.length === 0) {
    console.log("Password is strong")
} else {
    console.log("Password is not strong")
    errors.forEach(err => console.log(err))
}
    
}