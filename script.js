
const convertButton = document.querySelector(".convert-button")

async function convertValues(){

    const currencySelect = document.querySelector(".currency-select")

    const currencySelectde = document.querySelector(".currency-select-de")
   
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector("#currency-convert-value")

    const currencyValueToConverted = document.querySelector("#currency-converted-value")

    //https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,BRL-USD,BRL-EUR,BRL-GBP,USD-EUR,USD-GBP,EUR-USD,EUR-GBP,GBP-USD,GBP-EUR,BTC-USD,BTC-EUR
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,BRL-USD,BRL-EUR,BRL-GBP,USD-EUR,USD-GBP,EUR-USD,EUR-GBP,GBP-USD,GBP-EUR,BTC-USD,BTC-EUR").then( Response => Response.json())
    
    const data2 = { 
        link1: await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json").then( Response => Response.json()),
        link2: await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.json").then( Response => Response.json()),
        link3: await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/gbp.json").then( Response => Response.json()),
        link4: await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json").then( Response => Response.json()),
        link5: await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.json").then( Response => Response.json()),
    }
    
    console.log(data2)

    const dolarToReal = data.USDBRL.high
    const euroToReal = data.EURBRL.high
    const libraToReal = data.GBPBRL.high
    const bitcoinToReal = data.BTCBRL.high
    const realToReal = 1

    const realToDolar = data.BRLUSD.high
    const realToEuro = data.BRLEUR.high  
    const realToLibra = data.BRLGBP.high
    const realToBitcoin = data2.link2.brl.btc


    const dolarToEuro = data.USDEUR.high
    const dolarToLibra = data.USDGBP.high
    const dolarToBitcoin = data2.link4.usd.btc

    const euroToDolar = data.EURUSD.high
    const libraToDolar = data.GBPUSD.high
    const bitcoinToDolar = data.BTCUSD.high

    const euroToLibra = data.EURGBP.high
    const euroToBitcoin = data2.link1.eur.btc

    const libraToEuro = data.GBPEUR.high
    const libraToBitcoin = data2.link3.gbp.btc

    const bitcoinToEuro = data.BTCEUR.high
    const bitcoinToLibra = data2.link5.btc.gbp

   
    
    
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
        }).format(inputCurrencyValue/euroToDolar)

    }

    if (currencySelectde.value == "dolarde" && currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToDolar)

    }

    if (currencySelectde.value == "dolarde" && currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/bitcoinToDolar)

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
        }).format(inputCurrencyValue / dolarToEuro)

    }

    if (currencySelectde.value == "eurode" && currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToEuro) 

    }

    if (currencySelectde.value == "eurode" && currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToEuro) 

    }

    if (currencySelectde.value == "librade" && currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToLibra)

    }

    if (currencySelectde.value == "librade" && currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToLibra)

    }

    if (currencySelectde.value == "librade" && currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToLibra)

    }

    if (currencySelectde.value == "bitcoinde" && currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToBitcoin)

    }

    if (currencySelectde.value == "bitcoinde" && currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToBitcoin)

    }

    if (currencySelectde.value == "bitcoinde" && currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("gb-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToBitcoin)

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


