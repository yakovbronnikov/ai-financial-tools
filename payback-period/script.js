let amount = document.getElementById('amount')
let income = document.getElementById('income')

let termType = document.getElementById('term-type')
let calculateButton = document.getElementById('calculate')

let resultMonths = document.getElementById('result-months')
let resultYears = document.getElementById('result-years')
let annualPercent = document.getElementById('result-percent')
let currencyInput = document.querySelector('.input-label span')

let historyList = document.getElementById('history')
let historySkeleton = document.querySelector(".history-skeleton").querySelectorAll('div')


function historyUpdate(month, payment, amount) {
  payment = numberWithSpaces(payment.toFixed(2))
  amount = numberWithSpaces(amount.toFixed(2))

  let item = document.createElement("div");
  item.classList.add("history-item")
  item.innerHTML = `<p>${month + 1}</p><p>${countrySymbol} ${payment}</p><p>${countrySymbol} ${amount}</p>`;
  document.getElementById('history').appendChild(item)
}


function calc() {
    incomeMonthly = Number(income.value)
    incomeAnnuale = Number(income.value)

  if (termType.value == 'month') {
    incomeAnnuale = incomeMonthly * 12
  } else {
    incomeMonthly = incomeAnnuale / 12
  }

  let monthCount = Number(amount.value) / incomeMonthly
  let yearCount = Number(amount.value) / incomeAnnuale
  let percent = incomeAnnuale / (Number(amount.value) / 100)
  let totalAmount = 0
  let historyCount = 0

  resultMonths.innerText = monthCount.toFixed(0)
  resultYears.innerText = yearCount.toFixed(1)
  annualPercent.innerText = percent.toFixed(1) + " %"
  currencyInput.innerText = countrySymbol


  while (historyList.firstChild) {
    historyList.removeChild(historyList.firstChild);
  }

  if (termType.value == 'month') {
    historyCount = monthCount
  } else {
    historyCount = yearCount
  }

  for (let i = 0; i < historyCount; i++) {
    totalAmount = totalAmount + Number(income.value)
    historyUpdate(i, Number(income.value), totalAmount)
  }
  skeleton()
}

function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

function skeleton() {

  historyList.classList.add("skeleton-appearance")
  resultYears.classList.add("skeleton-appearance")
  annualPercent.classList.add("skeleton-appearance")
  document.querySelector(".monthly-skeleton").classList.add("result-skeleton")
  document.querySelector(".amount-skeleton").classList.add("result-skeleton")
  document.querySelector(".percent-skeleton").classList.add("result-skeleton")


  setTimeout(() => {
    historyList.classList.remove("skeleton-appearance")
    resultYears.classList.remove("skeleton-appearance")
    annualPercent.classList.remove("skeleton-appearance")
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



setTimeout(() => {calc()}, "800")