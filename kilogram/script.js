let price = document.getElementById('price')
let weight = document.getElementById('weight')

let weightType = document.getElementById('weight-type')
let calculateButton = document.getElementById('calculate')

let addButton = document.getElementById('add-product')

let resultPrice = document.getElementById('result-price')

let productList = document.getElementById('product-list')
let productName = document.getElementById('product-name')
let productListStorage = []


if(localStorage.getItem('tasks')) {
  productListStorage = JSON.parse(localStorage.getItem('tasks'))
  addProduct()
}

function calc(weightType) {
    priceKilo = 0

  if (weightType == 'Grams') {
    priceKilo = Number(price.value) / Number(weight.value) * 1000
  } else {
    priceKilo = Number(price.value) / Number(weight.value)
  }

  resultPrice.innerHTML = ""
  resultPrice.innerHTML = `$ ${priceKilo.toFixed(2)}`

  skeleton()
}

function weightTypeSwitch(event) {
  calculateButton.setAttribute("onclick", `calc("${event.target.value}")`)
}

function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

function skeleton() {

  resultPrice.classList.add("skeleton-appearance")
  document.querySelector(".price-skeleton").classList.add("result-skeleton")
  

  setTimeout(() => {
    resultPrice.classList.remove("skeleton-appearance")
    document.querySelector(".price-skeleton").classList.remove("result-skeleton")
  }, "1200");
}







addButton.addEventListener('click',function(){
  let priceKg = Number(price.value) / Number(weight.value) * 1000 
  priceKg = priceKg.toFixed(2)
  let product = productName.value == "" ? "Product" : productName.value
  
  let newProduct = {
    name: product,
    price: priceKg,
    weight: weight.value
  }


  productListStorage.push(newProduct)
  addProduct()
  calc(weightType.value)
  localStorage.setItem('tasks', JSON.stringify(productListStorage))
  productName.value = ''
})


function addProduct() {
  let productLayout = ''
  
  productListStorage.forEach(function(item, i) {
    productLayout += 
    `
    <div class="product-item">
      <div class="product-info">
        <p class="product-name">${item.name}</p>
        <p>${item.weight}${weightType.value == "Grams" ? "g" : "kg"}</p>
        <p>$ ${item.price}/kg</p>
      </div>
      <button class="delete-product" onclick="deleteProduct(event, ${i})"></button>
    </div>
    `
  })

  productList.innerHTML = productLayout
}

function deleteProduct(event, id) {
  productListStorage.splice(id, 1)
  localStorage.setItem('tasks', JSON.stringify(productListStorage))
  addProduct()
}



setTimeout(() => {calc('Grams')}, "800")