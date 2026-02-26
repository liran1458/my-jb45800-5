const moshe = {
    id: 12,
    name: `moshe`,
    country: `isreal`,
    pic: `https://ynet-pic1.yit.co.il/picserver5/wcm_upload/2021/03/17/10599894/10599825010001009801241no.jpg`
}


function add() {
    const table = document.getElementById('table')
    table.innerHTML +=
        ` <tr>
                <td>${moshe.id}</td>
                <td>${moshe.name}</td>
                <td>${moshe.country}</td>
                <td><img src = "${moshe.pic}"></td>
            </tr>
`
}
