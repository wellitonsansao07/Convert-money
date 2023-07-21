const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const moedaValorconvert = document.querySelector(".moeda-valor-convert") // Valor em Real
    const moedaValorconvertido = document.querySelector(".moeda-valor") // Outras Moedas

    const dolarToday = 4.77
    const euroToday = 5.31
    const bitcoinToday = 143000.00
    const libraToday = 6.15



    if (currencySelect.value == "dolar") { // Se o select estiver selecionado o valor de dolar, entre aqui
        moedaValorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") { // Se o select estiver selecionado o valor de euro, entre aqui
        moedaValorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") { // Se o select estiver selecionado o valor do bitcoin, entre aqui
        moedaValorconvertido.innerHTML = new Intl.NumberFormat("de-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday) 
    }

    if (currencySelect.value == "libra") { // Se o select estiver selecionado o valor da libra, entre aqui
        moedaValorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


        moedaValorconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }

    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")

        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar americano"
            currencyImage.src = "./assets/dolar.png"
        }

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/Euro.png"
        }

        if (currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "₿ Bitcoin"
            currencyImage.src = "./assets/bitcoin .png"
        }

        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "£ Libra"
            currencyImage.src = "./assets/libra.png"
        }

        convertValues()
    }


    currencySelect.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)