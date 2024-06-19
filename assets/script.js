const baseUrl =  "https://striveschool-api.herokuapp.com/api/product/"

window.onload = async () => {
    let response = await fetch (baseUrl, {
        headers: {
            authorization: 
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZmMWI3NDUxYTNhMjAwMTVmMDYyNWQiLCJpYXQiOjE3MTg1NTc1NTYsImV4cCI6MTcxOTc2NzE1Nn0.a5QrKwR_jWRn6mBXEXTdEJRAmTQZ3gyjwRr9vhGDKMU",
    },
})
    let prodotti = await response.json()
    let row = document.querySelector(".prodotti")
    prodotti.forEach((prod) => {
        row.innerHTML += 
        ` <div class='col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4'>  
        <div class="card justify-content-between">
          <img src="${prodotti.imageUrl}" class="card-img-top" alt="${prodotti._id}_${prodotti.name}">
          <div class="card-body">
            <h5 class="card-title">${prodotti.name}</h5>
            <a href="./index-backend.html?id=${prodotti._id}" class="btn btn-primary">Details</a>
          </div>
        </div> 
      </div>`
    });
}
