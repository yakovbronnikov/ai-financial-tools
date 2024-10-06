let amount = document.getElementById('amount')
let percent = document.getElementById('percent')
let term = document.getElementById('term')

let compound = document.getElementById('compound')
let calculateButton = document.getElementById('calculate')

let resultAmount = document.getElementById('result-amount')
let resultPercent = document.getElementById('result-percent')
let historyList = document.getElementById('history')
let historySkeleton = document.querySelector(".history-skeleton").querySelectorAll('div')

let history = new Object();



function historyUpdate(month, percent, amount) {
    percent = numberWithSpaces(percent.toFixed(2))
    amount = numberWithSpaces(amount.toFixed(2))

    let item = document.createElement("div");
    item.classList.add("history-item")
    item.innerHTML = `<p>${month + 1}</p><p>${countrySymbol} ${percent}</p><p>${countrySymbol} ${amount}</p>`;
    document.getElementById('history').appendChild(item)
}



function calc() {
    let totalAmount = Number(amount.value)
    let percentMonth = totalAmount / 100 * Number(percent.value) / 12
    let percentAmount = percentMonth * Number(term.value)
    totalAmount = totalAmount + percentAmount

    while (historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }

    if (compound.checked) {
        totalAmount = Number(amount.value)
        percentAmount = 0
        percentMonth = 0

        for (let i = 0; i < Number(term.value); i++) {
            percentMonth = totalAmount / 100 * Number(percent.value) / 12
            percentAmount = percentAmount + percentMonth
            totalAmount = totalAmount + percentMonth
            history[i] = percentAmount
            historyUpdate(i, percentAmount, totalAmount)
        }
    } else {
        for (let i = 0; i < Number(term.value); i++) {
            percentAmount = percentMonth * (i + 1)
            totalAmount = Number(amount.value) + percentAmount
            historyUpdate(i, percentAmount, totalAmount)
        }
    }

    resultAmount.innerText = `${countrySymbol} ${numberWithSpaces(totalAmount.toFixed(2))}`
    resultPercent.innerText = `${countrySymbol} ${numberWithSpaces(percentAmount.toFixed(2))}`

    skeleton()
}



document.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
        calc()
    }
});


function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}


function skeleton() {

    historyList.classList.add("skeleton-appearance")
    resultPercent.classList.add("skeleton-appearance")
    resultAmount.classList.add("skeleton-appearance")
    document.querySelector(".amount-skeleton").classList.add("result-skeleton")
    document.querySelector(".percent-skeleton").classList.add("result-skeleton")


    setTimeout(() => {
        historyList.classList.remove("skeleton-appearance")
        resultPercent.classList.remove("skeleton-appearance")
        resultAmount.classList.remove("skeleton-appearance")
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


setTimeout(() => {calc()}, "250")