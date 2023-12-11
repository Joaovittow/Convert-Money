const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')
const currencySelectToConvert = document.querySelector('.currency-select-to-convert')


const convertValues = async() => {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
  const currencyValueToConverted = document.querySelector('.currency-value')

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const BitCoin = data.BTCBRL.high

console.log(data)

//Valor convertido//

  if(currencySelectToConvert.value == 'Dolar') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(inputCurrencyValue / dolar)
  }

  if(currencySelectToConvert.value == 'Euro') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputCurrencyValue / euro)
  }
  
  
  if(currencySelectToConvert.value == 'Bitcoin') {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BTC'
    }).format(inputCurrencyValue / BitCoin)
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
  
  if (currencySelectToConvert.value == 'Bitcoin') {
    currencyNameConverted.innerHTML = 'BitCoin'
    currencyImage.src = './assets/bitcoin.png'
  }
  
  convertValues()
  
  
}


currencySelectToConvert = addEventListener('change', currencyChange)
convertButton = addEventListener('click', convertValues)