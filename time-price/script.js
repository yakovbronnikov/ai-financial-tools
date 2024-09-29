let salary = document.getElementById('salary')
let salarySchedule = document.getElementById('salary-schedule')
let workSchedule = document.getElementById('work-schedule')
let hours = document.getElementById('hours')

let resultMinute = document.getElementById('result-minute')
let resultHour = document.getElementById('result-hour')
let resultDay = document.getElementById('result-day')
let resultWeek = document.getElementById('result-week')
let resultMonth = document.getElementById('result-month')
let resultYear = document.getElementById('result-year')

let dataStorage = {
  salaryYear: 0,
  salaryMonth: 0,
  salaryDay: 0,
  salaryWeek: 0,
  salaryHour: 0,
  salaryMinute: 0
}



function calcData() {

  if (workSchedule.value == "247" &&  salarySchedule.value == "year") {
    
    dataStorage.salaryYear = Number(salary.value)
    dataStorage.salaryMonth = Number(salary.value) / 12
    dataStorage.salaryDay = Number(salary.value) / 12 / 21
    dataStorage.salaryWeek = Number(salary.value) / 12 / 21 * 5
    dataStorage.salaryHour = Number(salary.value) / 12 / 21 / Number(hours.value)
    dataStorage.salaryMinute = Number(salary.value) / 12 / 21 / Number(hours.value) / 60
    
  } else if (workSchedule.value == "247" &&  salarySchedule.value == "month") {
    
    dataStorage.salaryYear = Number(salary.value) * 12
    dataStorage.salaryMonth = Number(salary.value)
    dataStorage.salaryDay = Number(salary.value) / 21
    dataStorage.salaryWeek = Number(salary.value) / 21 * 5
    dataStorage.salaryHour = Number(salary.value) / 21 / Number(hours.value)
    dataStorage.salaryMinute = Number(salary.value) / 21 / Number(hours.value) / 60
    
  } else if (workSchedule.value == "247" &&  salarySchedule.value == "day") {
     
    dataStorage.salaryYear = Number(salary.value) * 21 * 12
    dataStorage.salaryMonth = Number(salary.value) * 21
    dataStorage.salaryDay = Number(salary.value)
    dataStorage.salaryWeek = Number(salary.value) * 5
    dataStorage.salaryHour = Number(salary.value) / Number(hours.value)
    dataStorage.salaryMinute = Number(salary.value) / Number(hours.value) / 60
    
  } else if (workSchedule.value == "247" &&  salarySchedule.value == "hour") {
    
    dataStorage.salaryYear = Number(salary.value) * Number(hours.value) * 21 * 12
    dataStorage.salaryMonth = Number(salary.value) * Number(hours.value) * 21
    dataStorage.salaryDay = Number(salary.value) * Number(hours.value)
    dataStorage.salaryWeek = Number(salary.value) * Number(hours.value) * 5
    dataStorage.salaryHour = Number(salary.value)
    dataStorage.salaryMinute = Number(salary.value) / 60
    
  } else if (workSchedule.value == "183" &&  salarySchedule.value == "year") {
    
    dataStorage.salaryYear = Number(salary.value)
    dataStorage.salaryMonth = Number(salary.value) / 12
    dataStorage.salaryDay = Number(salary.value) / 12 / 15
    dataStorage.salaryWeek = Number(salary.value) / 12 / 15 * 4
    dataStorage.salaryHour = Number(salary.value) / 12 / 15 / Number(hours.value)
    dataStorage.salaryMinute = Number(salary.value) / 12 / 15 / Number(hours.value) / 60
    
  } else if (workSchedule.value == "183" &&  salarySchedule.value == "month") {
    
    dataStorage.salaryYear = Number(salary.value) * 12
    dataStorage.salaryMonth = Number(salary.value)
    dataStorage.salaryDay = Number(salary.value) / 15
    dataStorage.salaryWeek = Number(salary.value) / 15 * 4
    dataStorage.salaryHour = Number(salary.value) / 15 / Number(hours.value)
    dataStorage.salaryMinute = Number(salary.value) / 15 / Number(hours.value) / 60
    
  } else if (workSchedule.value == "183" &&  salarySchedule.value == "day") {
    
    dataStorage.salaryYear = Number(salary.value) * 15 * 12
    dataStorage.salaryMonth = Number(salary.value) * 15
    dataStorage.salaryDay = Number(salary.value)
    dataStorage.salaryWeek = Number(salary.value) * 4
    dataStorage.salaryHour = Number(salary.value) / Number(hours.value)
    dataStorage.salaryMinute = Number(salary.value) / Number(hours.value) / 60
    
  } else if (workSchedule.value == "183" &&  salarySchedule.value == "hour") {
    
    dataStorage.salaryYear = Number(salary.value) * Number(hours.value) * 15 * 12
    dataStorage.salaryMonth = Number(salary.value) * Number(hours.value) * 15
    dataStorage.salaryDay = Number(salary.value) * Number(hours.value)
    dataStorage.salaryWeek = Number(salary.value) * Number(hours.value) * 4
    dataStorage.salaryHour = Number(salary.value)
    dataStorage.salaryMinute = Number(salary.value) / 60
    
  }
  
  displayData(dataStorage)
  skeleton()
}

function displayData(storage) {
  resultMinute.innerText = "$ " + numberWithSpaces(storage.salaryMinute.toFixed(2))
  resultHour.innerText = "$ " + numberWithSpaces(storage.salaryHour.toFixed(2))
  resultDay.innerText = "$ " + numberWithSpaces(storage.salaryDay.toFixed(2))
  resultWeek.innerText = "$ " + numberWithSpaces(storage.salaryWeek.toFixed(2))
  resultMonth.innerText = "$ " + numberWithSpaces(storage.salaryMonth.toFixed(2))
  resultYear.innerText = "$ " + numberWithSpaces(storage.salaryYear.toFixed(2))
}

function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

function skeleton() {

  let resultSkeleton = document.querySelectorAll('.skeleton-result')

  for (let i = 0; i < resultSkeleton.length; i++) {
    resultSkeleton[i].classList.add("result-skeleton")
    setTimeout(() => {
      resultSkeleton[i].classList.remove("result-skeleton")
    }, "1200");
  }
}

function hoursChange(type) {
  if (hours.value == '24' &&  type == '+' || hours.value == '1' &&  type == '-') {
    return
  }

  type == '+' ? hours.value = Number(hours.value) + 1 : hours.value -= 1
}

calcData()