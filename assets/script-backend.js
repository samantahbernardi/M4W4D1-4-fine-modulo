const baseUrl = "https://striveschool-api.herokuapp.com/api/product/"

let pippo = new URLSearchParams(window.location.search)
let id = pippo.get("id")
window.onload = async () => {
    if (id) {
        const response = await fetch(baseUrl + id, {
            headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZmMWI3NDUxYTNhMjAwMTVmMDYyNWQiLCJpYXQiOjE3MTg1NTc1NTYsImV4cCI6MTcxOTc2NzE1Nn0.a5QrKwR_jWRn6mBXEXTdEJRAmTQZ3gyjwRr9vhGDKMU",
            },
        })
        const prodotto = await res.json()
        document.querySelector("#nomeProdotto").value = product.name
        document.querySelector("#descProdotto").value = product.description
        document.querySelector("#brandProdotto").value = product.brand
        document.querySelector("#immagineProdotto").value = product.imageUrl
        document.querySelector("#prezzoProdotto").value = product.price
        document.querySelector(".btn-success").remove()
    } else {
        document.querySelector(".btn-danger").remove()
        document.querySelector(".btn-warning").remove()
    }
}

function inserisciProdotto() {
document.querySelector("#submit").addEventListener(click);
}
const aggiungiProdotto = async () => {
    document.querySelector("#submit").addEventListener(click)
    const prodotto = {
    name: document.querySelector("#nomeProdotto").value,
    description: document.querySelector("#descProdotto").value,
    brand: document.querySelector("#brandProdotto").value,
    imageUrl: document.querySelector("#immagineProdotto").value,
    price: document.querySelector("#prezzoProdotto").value
    }

    let resp = await fetch(baseUrl, {
        method:"POST",
        headers: {
            "content-type": "application/json",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZmMWI3NDUxYTNhMjAwMTVmMDYyNWQiLCJpYXQiOjE3MTg1NTc1NTYsImV4cCI6MTcxOTc2NzE1Nn0.a5QrKwR_jWRn6mBXEXTdEJRAmTQZ3gyjwRr9vhGDKMU",
        },
        body: JSON.stringify(prodotto),
    })
    if(resp.ok){
        alert("il prodotto è stato aggiunto correttamente")
}
}