let amount = document.getElementById('amount')
let percent = document.getElementById('percent')
let term = document.getElementById('term')

let termType = document.getElementById('term-type')
let calculateButton = document.getElementById('calculate')

let resultMonthly = document.getElementById('result-monthly')
let resultPercent = document.getElementById('result-percent')
let resultAmount = document.getElementById('result-amount')

let historyList = document.getElementById('history')
let historySkeleton = document.querySelector(".history-skeleton").querySelectorAll('div')

let history = new Object();


function historyUpdate(month, payment, amount) {
  payment = numberWithSpaces(payment.toFixed(2))
  amount = numberWithSpaces(amount.toFixed(2))

  let item = document.createElement("div");
  item.classList.add("history-item")
  item.innerHTML = `<p>${month + 1}</p><p>$ ${payment}</p><p>$ ${amount}</p>`;
  document.getElementById('history').appendChild(item)
}


function calc(termType) {
  let months = Number(term.value) * 12
  let years = Number(term.value) / 12

  if (termType == 'month') {
    months = Number(term.value)
  } else {
    years = Number(term.value)
  }

  let percentAmount = Number(amount.value) / 100 * Number(percent.value) * years
  let totalAmount = Number(amount.value) + percentAmount
  let monthlyAmount = totalAmount / months

  resultMonthly.innerText = "$ " + numberWithSpaces(monthlyAmount.toFixed(2))
  resultPercent.innerText = "$ " + numberWithSpaces(percentAmount.toFixed(2))
  resultAmount.innerText = "$ " + numberWithSpaces(totalAmount.toFixed(2))

  while (historyList.firstChild) {
    historyList.removeChild(historyList.firstChild);
  }

  for (let i = 0; i < months; i++) {
    totalAmount = totalAmount - monthlyAmount
    historyUpdate(i, monthlyAmount, totalAmount)
    console.log("www");
  }
  skeleton()
}

function termTypeSwitch() {
  calculateButton.setAttribute("onclick", `calc("${termType.value}")`)
}

function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

function skeleton() {

  historyList.classList.add("skeleton-appearance")
  resultPercent.classList.add("skeleton-appearance")
  resultAmount.classList.add("skeleton-appearance")
  document.querySelector(".monthly-skeleton").classList.add("result-skeleton")
  document.querySelector(".amount-skeleton").classList.add("result-skeleton")
  document.querySelector(".percent-skeleton").classList.add("result-skeleton")


  setTimeout(() => {
    historyList.classList.remove("skeleton-appearance")
    resultPercent.classList.remove("skeleton-appearance")
    resultAmount.classList.remove("skeleton-appearance")
    document.querySelector(".monthly-skeleton").classList.remove("result-skeleton")
    document.querySelector(".amount-skeleton").classList.remove("result-skeleton")
    document.querySelector(".percent-skeleton").classList.remove("result-skeleton")
  }, "1200");

  for (let i = 0; i < historySkeleton.length; i++) {
    historySkeleton[i].classList.add("history-skeleton-item")
    setTimeout(() => {
      historySkeleton[i].classList.remove("history-skeleton-item")
    }, "1000");
  }
}



setTimeout(() => {calc('month')}, "200")