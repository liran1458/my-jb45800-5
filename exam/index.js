const data = []

// Load data from LocalStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('products')
    if (saved) {
        const parsed = JSON.parse(saved)
        data.push(...parsed)
        drawDataOnTable()
    }
}

// Save data to LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(data))
}

function resetForm() {
    document.getElementById('productForm').reset()
}

function getTotalProducts() {
    const total = document.getElementById("total")
    total.innerHTML = data.length
    
}

function getPriceAverage() {
    const averagePrice = document.getElementById("averagePrice")
    let sum = 0

    for (const product of data) {
        sum += product.price  
    }

    const average = data.length ? sum / data.length : 0
    averagePrice.innerHTML = average.toFixed(2)

    return average
}

function isValidURL(url) {
    if (!url.startsWith('http')) return false
    if (url.includes(' ')) return false
    if (!url.includes('://')) return false
    return true
}

function catalogExists(catalogNumber) {
    for (const product of data) {
        if (product.catalogNumber === catalogNumber) {
            return true
        }
    }
    return false
}

function drawDataOnTable() {
    let htmlString = ''
    const content = document.getElementById('content')

    for (const product of data) {
        htmlString += `
            <tr>
                <td>${product.catalogNumber}</td>
                <td>${product.productName}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td><img class="myImg" src="${product.imgURL}" /></td>
                <td><button onclick="deleteProduct(${product.catalogNumber})" class="deleteButton">delete</button></td>
            </tr>
        `
    }

    content.innerHTML = htmlString
    getTotalProducts()
    getPriceAverage()
}

function getUserInputs(event) {
    event.preventDefault()

    const catalogNumber = document.getElementById('catalogNumber').value
    const productName = document.getElementById('productName').value
    const description = document.getElementById('description').value.trim()
    const price = document.getElementById('price').value
    const category = document.getElementById('category').value
    const imgURL = document.getElementById('img').value

    // Check duplicate catalog number
    if (catalogExists(catalogNumber)) {
        alert('Catalog number already exists')
        return
    }

    // Check URL valid
    if (!isValidURL(imgURL)) {
        alert('Please enter a valid image URL')
        return
    }

    // Add product
    data.push({
        catalogNumber,
        productName,
        description,
        price : +price,
        category,
        imgURL
    })

    saveToLocalStorage()  
    resetForm()
    drawDataOnTable()
}

function deleteProduct(productId) {
    if (confirm(`Are you sure you want to delete product ${productId}?`)) {
        let index = 0
        for (const product of data) {
            if (+product.catalogNumber === productId) {
                data.splice(index, 1)
                saveToLocalStorage()  // Save after delete
                drawDataOnTable()
                return
            }
            index++
        }
    }
}

console.log(data)
loadFromLocalStorage()