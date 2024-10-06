let countrySelect = document.getElementById('country')

let conuntryList = {
  AZ: '₼',
  CN: '¥',
  EU: '€',
  GE: '₾',
  IN: '₹',
  JP: '¥',
  KR: '₩',
  KZ: '₸',
  NG: '₦',
  RU: '₽',
  TH: '฿',
  TM: '₼',
  TR: '₺',
  UK: '£',
  US: '$',
}

let countrySymbol = conuntryList.US

function cnangeCountry() {
  localStorage.setItem('country', JSON.stringify(countrySelect.value))
  countrySymbol = conuntryList[countrySelect.value]
}

async function getUserCountry() {
  try {
    const response = await fetch('https://ipinfo.io/json?token=556db3634e33b8');
    const data = await response.json();

    if (data.country in conuntryList) {
      countrySelect.value = data.country
      countrySymbol = conuntryList[data.country]
    } else {
      countrySelect.value = 'US'
      countrySymbol = conuntryList['US']
    }

  } catch (error) {
    console.error('Не удалось определить страну пользователя:', error);
  }
}

if(localStorage.getItem('country')) {
  let storageCountry = JSON.parse(localStorage.getItem('country'))
  countrySelect.value = storageCountry
  countrySymbol = conuntryList[storageCountry]
} else {
  getUserCountry()
}