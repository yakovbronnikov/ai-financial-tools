let amount = document.getElementById('amount')
let percent = document.getElementById('percent')
let term = document.getElementById('term')

let compound = document.getElementById('compound')
let calculateButton = document.getElementById('calculate')

let resultAmount = document.getElementById('result-amount')
let resultPercent = document.getElementById('result-percent')
let historyList = document.getElementById('history')
let historySkeleton = document.querySelectorAll(".history-skeleton-item")

let history = new Object();



function historyUpdate(month, percent, amount) {
    percent = numberWithSpaces(percent.toFixed(2))
    amount = numberWithSpaces(amount.toFixed(2))

    let item = document.createElement("div");
    item.classList.add("history-item")
    item.innerHTML = `<p>${month + 1}</p><p>$ ${percent}</p><p>$ ${amount}</p>`;
    document.getElementById('history').appendChild(item)
}



function calcTotalCompound() {
    let totalAmount = Number(amount.value)
    let percentAmount = 0
    let percentMoth = 0


    while (historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }

    for (let i = 0; i < Number(term.value); i++) {
        percentMoth = totalAmount / 100 * Number(percent.value) / 12
        percentAmount = percentAmount + percentMoth
        totalAmount = totalAmount + percentMoth
        history[i] = percentAmount
        historyUpdate(i, percentAmount, totalAmount)
    }

    resultAmount.innerText = "$ " + numberWithSpaces(totalAmount.toFixed(2))
    resultPercent.innerText = "$ " + numberWithSpaces(percentAmount.toFixed(2))

    skeleton()
}


function calcTotal() {
    let totalAmount = Number(amount.value)
    let percentMoth = totalAmount / 100 * Number(percent.value) / 12
    let percentAmount = percentMoth * Number(term.value)
    totalAmount = totalAmount + percentAmount

    resultAmount.innerText = "$ " + numberWithSpaces(totalAmount.toFixed(2))
    resultPercent.innerText = "$ " + numberWithSpaces(percentAmount.toFixed(2))

    while (historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }

    for (let i = 0; i < Number(term.value); i++) {
        percentAmount = percentMoth * (i + 1)
        totalAmount = Number(amount.value) + percentAmount
        historyUpdate(i, percentAmount, totalAmount)
    }

    skeleton()
}

document.addEventListener('keyup', event => {
    if (event.code === 'Enter' & compound.checked == true) {
        calcTotalCompound()
    } else if (event.code === 'Enter' & compound.checked == false) {
        calcTotal()
    }
});


function compoundSwitch() {
    if (compound.checked == true) {
        calculateButton.setAttribute("onclick", "calcTotalCompound()")
    } else {
        calculateButton.setAttribute("onclick", "calcTotal()")
    }
}


function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}


function skeleton() {
    historyList.classList.add("appearance")
    resultPercent.classList.add("appearance")
    resultAmount.classList.add("appearance")
    document.querySelector(".amount-skeleton").classList.add("result-skeleton")
    document.querySelector(".percent-skeleton").classList.add("result-skeleton")


    setTimeout(() => {
        historyList.classList.remove("appearance")
        resultPercent.classList.remove("appearance")
        resultAmount.classList.remove("appearance")
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

calcTotalCompound()