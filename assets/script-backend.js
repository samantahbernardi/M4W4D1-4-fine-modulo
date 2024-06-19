const baseUrl = "https://striveschool-api.herokuapp.com/api/product/"

let param = new URLSearchParams(window.location.search)
let id = param.get("id")
window.onload = async () => {
    if (id) {
        const res = await fetch(baseUrl + id, {
            headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZmMWI3NDUxYTNhMjAwMTVmMDYyNWQiLCJpYXQiOjE3MTg1NTc1NTYsImV4cCI6MTcxOTc2NzE1Nn0.a5QrKwR_jWRn6mBXEXTdEJRAmTQZ3gyjwRr9vhGDKMU",
            },
        })
        const nuovoProdotto = await res.json()
        document.querySelector("#nomeProdotto").value = product.name
        document.querySelector("#descProdotto").value = product.description
        document.querySelector("#brandProdotto").value = product.brand
        document.querySelector("#immagineProdotto").value = product.imageUrl
        document.querySelector("#prezzoProdotto").value = product.price
        document.querySelector(".btn-success").remove()
    } // else {
       // document.querySelector(".btn-danger").remove()
        //document.querySelector(".btn-warning").remove()
    }


async function aggiungiProdotto () {
    const nuovoProdotto = {
    name: document.querySelector("#nomeProdotto").value,
    description: document.querySelector("#descProdotto").value,
    brand: document.querySelector("#brandProdotto").value,
    imageUrl: document.querySelector("#immagineProdotto").value,
    price: document.querySelector("#prezzoProdotto").value
    }

    let res = fetch(baseUrl, {
        method:"POST",
        headers: {
            "content-type": "application/json",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZmMWI3NDUxYTNhMjAwMTVmMDYyNWQiLCJpYXQiOjE3MTg1NTc1NTYsImV4cCI6MTcxOTc2NzE1Nn0.a5QrKwR_jWRn6mBXEXTdEJRAmTQZ3gyjwRr9vhGDKMU",
        },
       body: JSON.stringify({name: nuovoProdotto.name,
            description: nuovoProdotto.description,
            brand: nuovoProdotto.brand,
            imageUrl: nuovoProdotto.imageUrl,
            price: nuovoProdotto.price}),
            
        })
    }
    if(res === 200){
        alert("il prodotto è stato aggiunto correttamente")
} else { 
    alert("il prodotto è già presente in magazzino")
}

let newRow = document.createElement("tr")
newRow.innerHTML += `<th>${nomeProdotto.value}/th>
<th>${descProdotto.value}</th>
<th>${brandProdotto.value}</th>
<th>${immagineProdotto.value}</th>
<th>${prezzoProdotto.value}</th>
<th></th>
<th></th>`


const aggiornaProdotto = async () => {
    const nuovoProdotto = {
        name: document.querySelector("#nomeProdotto").value,
        description: document.querySelector("#descProdotto").value,
        brand: document.querySelector("#brandProdotto").value,
        imageUrl: document.querySelector("#immagineProdotto").value,
        price: document.querySelector("#prezzoProdotto").value
        }

        let res = await fetch(baseUrl + id, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZmMWI3NDUxYTNhMjAwMTVmMDYyNWQiLCJpYXQiOjE3MTg1NTc1NTYsImV4cCI6MTcxOTc2NzE1Nn0.a5QrKwR_jWRn6mBXEXTdEJRAmTQZ3gyjwRr9vhGDKMU",
            },
            body: JSON.stringify ({name: nuovoProdotto.name,
                description: nuovoProdotto.description,
                brand: nuovoProdotto.brand,
                imageUrl: nuovoProdotto.imageUrl,
                price: nuovoProdotto.price}),
        })
        if (res === 200) {
            alert("prodotto modificato")
        }
} 

const eliminaProdotto = async () => {
    const nuovoProdotto = {
        name: document.querySelector("#nomeProdotto").value,
        description: document.querySelector("#descProdotto").value,
        brand: document.querySelector("#brandProdotto").value,
        imageUrl: document.querySelector("#immagineProdotto").value,
        price: document.querySelector("#prezzoProdotto").value
        }

        let res = await fetch(baseUrl + id, {
            method: "DELETE",
            headers: {
                authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZmMWI3NDUxYTNhMjAwMTVmMDYyNWQiLCJpYXQiOjE3MTg1NTc1NTYsImV4cCI6MTcxOTc2NzE1Nn0.a5QrKwR_jWRn6mBXEXTdEJRAmTQZ3gyjwRr9vhGDKMU",
            }
        })
        if (res === 200) {
            alert("prodotto eliminato")
        }
} 