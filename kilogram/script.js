let price = document.getElementById('price')
let weight = document.getElementById('weight')

let weightType = document.getElementById('weight-type')
let calculateButton = document.getElementById('calculate')

let resultPrice = document.getElementById('result-price')



function calc(weightType) {
    priceKilo = 0

  if (weightType == 'Grams') {
    priceKilo = Number(price.value) / Number(weight.value) * 1000
  } else {
    priceKilo = Number(price.value) / Number(weight.value)
  }

  // resultPrice.innerHTML = "$ " + priceKilo.toFixed(2) + " / kg"


  resultPrice.innerHTML = ""
  resultPrice.innerHTML = `<span>$</span>${priceKilo.toFixed(2)}<span>/ kg</span>`

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



setTimeout(() => {calc('Grams')}, "800")