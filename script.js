
const convertButton = document.querySelector(".convert-button")

function convertValues(){

    const currencySelect = document.querySelector(".currency-select")

    const currencySelectde = document.querySelector(".currency-select-de")
   
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector("#currency-convert-value")

    const currencyValueToConverted = document.querySelector("#currency-converted-value")

    const dolarToReal = 5.42
    const euroToReal = 5.92
    const libraToReal = 7.05
    const bitcoinToReal = 355471.61
    const realToReal = 1

    const realToDolar = 0.1842503
    const realToEuro = 0.1692391  
    const realToLibra = 0.142201
    const realToBitcoin = 0.0000029


    const dolarToEuro = 1.0934
    const dolarToLibra = 1.3007
    const dolarToBitcoin = 64050.0

    const euroToDolar = 0.9145784
    const libraToDolar = 0.7688168
    const bitcoinToDolar = 0.000016

    const euroToLibra = 1.1898098
    const euroToBitcoin = 58610.50

    const libraToEuro = 0.8404705
    const libraToBitcoin = 49057.26

    const bitcoinToEuro = 0.000017
    const bitcoinToLibra = 0.000020
    

    if (currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToReal)
    }

    if (currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToReal)
    }

    if (currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToReal)

    }

    if (currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToReal)

    }

    if (currencySelectde.value == "realde"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }


    if (currencySelectde.value == "realde" && currencySelect.value == "real"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToReal)

    }

    if (currencySelectde.value == "dolarde"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    if (currencySelectde.value == "dolarde" && currencySelect.value == "real"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToDolar)

    }


    if (currencySelectde.value == "eurode"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    }

    if (currencySelectde.value == "eurode" && currencySelect.value == "real"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToEuro)
    
    }    
    
    if (currencySelectde.value == "librade"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    }

    if (currencySelectde.value == "librade" && currencySelect.value == "real"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToLibra)
    
    }

    if (currencySelectde.value == "bitcoinde"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    }

    if (currencySelectde.value == "bitcoinde" && currencySelect.value == "real"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToBitcoin)
    
    }

    if (currencySelectde.value == "dolarde" && currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/dolarToEuro)

    }

    if (currencySelectde.value == "dolarde" && currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/dolarToLibra)

    }

    if (currencySelectde.value == "dolarde" && currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/dolarToBitcoin)

    }

    if (currencySelectde.value == "dolarde" && currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / realToReal)

    }

    if (currencySelectde.value == "eurode" && currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / euroToDolar)

    }

    if (currencySelectde.value == "eurode" && currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / euroToLibra) 

    }

    if (currencySelectde.value == "eurode" && currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / euroToBitcoin) 

    }

    if (currencySelectde.value == "librade" && currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / libraToDolar)

    }

    if (currencySelectde.value == "librade" && currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / libraToBitcoin)

    }

    if (currencySelectde.value == "librade" && currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / libraToEuro)

    }

    if (currencySelectde.value == "bitcoinde" && currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / bitcoinToDolar)

    }

    if (currencySelectde.value == "bitcoinde" && currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / bitcoinToEuro)

    }

    if (currencySelectde.value == "bitcoinde" && currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / bitcoinToLibra)

    }

    if (currencySelectde.value == "eurode" && currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / realToReal)

    }

    if (currencySelectde.value == "librade" && currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / realToReal)

    }

    if (currencySelectde.value == "bitcoinde" && currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / realToReal)

    }


        
    /*if (currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToDolar)

    }

    if (currencySelectde.value == "dolarde"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    if (currencySelectde.value == "dolarde"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToDolar)
*/
      

        
    //console.log(inputCurrencyValue / dolarToday)
}

const currencySelectde = document.querySelector(".currency-select-de")
const currencySelect = document.querySelector(".currency-select")


function changeCurrency(){
    console.log("MUDOU!")
        
    const currencyConvertedName = document.getElementById("currency-converted-name")
    const currencyImg = document.querySelector(".logo-convert-para")

    if (currencySelect.value == "dolar") {  
        currencyConvertedName.innerHTML = "Dólar Americano"
        currencyImg.src="./assets/dolar.png" 
    }

    if (currencySelect.value == "euro") {  
        currencyConvertedName.innerHTML = "Euro"
        currencyImg.src="./assets/euro.png"
    }

    if (currencySelect.value == "libra") {  
        currencyConvertedName.innerHTML = "Libra"
        currencyImg.src="./assets/libra.png"
        }

    if (currencySelect.value == "bitcoin") {  
        currencyConvertedName.innerHTML = "Bitcoin"
        currencyImg.src="./assets/bitcoin.png"
        }

    if (currencySelect.value == "real") {  
        currencyConvertedName.innerHTML = "Real"
        currencyImg.src="./assets/real.png"
        }


        const currencyConvertName = document.getElementById("currency-convert-name")
        const currencyImgDe = document.querySelector(".logo-convert-de")
    
        if (currencySelectde.value == "dolarde") {  
            currencyConvertName.innerHTML = "Dólar Americano"
            currencyImgDe.src="./assets/dolar.png" 
        }
    
        if (currencySelectde.value == "eurode") {  
            currencyConvertName.innerHTML = "Euro"
            currencyImgDe.src="./assets/euro.png"
        }
    
        if (currencySelectde.value == "librade") {  
            currencyConvertName.innerHTML = "Libra"
            currencyImgDe.src="./assets/libra.png"
            }
    
        if (currencySelectde.value == "bitcoinde") {  
            currencyConvertName.innerHTML = "Bitcoin"
            currencyImgDe.src="./assets/bitcoin.png"
            }
    
        if (currencySelectde.value == "realde") {  
            currencyConvertName.innerHTML = "Real"
            currencyImgDe.src="./assets/real.png"
            }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)

currencySelectde.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)


