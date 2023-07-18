const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')
const currencySelectToConvert = document.querySelector('.currency-select-to-convert')





function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
  const currencyValueToConverted = document.querySelector('.currency-value')



  const realToday = 1.0
  const dolarToday = 5.2
  const euroToday = 6.2
  const librasToday = 6.5


//Valor convertido//

  if(currencySelectToConvert.value == 'Dolar') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(inputCurrencyValue / dolarToday)
  }

  if(currencySelectToConvert.value == 'Euro') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputCurrencyValue / euroToday)
  }
  
  if(currencySelectToConvert.value == 'Libras') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: 'GBP'
    }).format(inputCurrencyValue / librasToday)
  }

  if(currencySelectToConvert.value == 'Real') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(inputCurrencyValue / realToday)
  }






  
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputCurrencyValue)




}





function currencyChange() {
  const currencyImage = document.querySelector('.currency-image')
  const currencyNameConverted = document.getElementById('currency-name-converted')
  
  
  
  
  if (currencySelectToConvert.value == 'Dolar') {
    currencyNameConverted.innerHTML = 'Dólar Americano'
    currencyImage.src = './assets/dolar.png'
  }
  
  if (currencySelectToConvert.value == 'Euro') {
    currencyNameConverted.innerHTML = 'Euro'
    currencyImage.src = './assets/euro.png'
  }
  
  if (currencySelectToConvert.value == 'Libras') {
    currencyNameConverted.innerHTML = 'Libras'
    currencyImage.src = './assets/libra.png'
  }
  
  if (currencySelectToConvert.value == 'Real') {
    currencyNameConverted.innerHTML = 'Real Brasileiro'
    currencyImage.src = './assets/real.png'
  }
  
  convertValues()
  
  
}


currencySelectToConvert = addEventListener('change', currencyChange)
convertButton = addEventListener('click', convertValues)