function Convert() {
    var realValue = document.getElementById("realValue").value
    var message = document.getElementById("message")
    var result = document.getElementById("result")
    
    currency = chooseCurrency()

    realValue = parseFloat(realValue).toFixed(2)

    if (realValue == "NaN") {
        message.innerHTML = "O valor digitado é inválido!"
        result.innerHTML = ""

    } else {
        var mResult, symbol, cValue

        switch (currency) {

            case ("usd"):
                mResult = "Real (R$) para Dólar Americano (U$)"
                cValue = 5.29
                break;

            case ("euro"):
                mResult = "Real (R$) para Euro (€)"
                cValue = 6.20
                break;

            case ("bitcoin"):
                mResult = "Real (R$) para Bitcoin (BTC)"
                cValue = 253527.72
                break;

            case ("swissFranc"):
                mResult = "Real (R$) para Franco Suíço (CHF)"
                cValue = 5.67
                break;

            case ("argentinePes"):
                mResult = "Real (R$) para Peso Argentino ($)"
                cValue = 0.054
                break;

            case ("japaneseYen"):
                mResult = "Real (R$) para Iene (¥)"
                cValue = 0.048
                break;

            case ("poundSterling"):
                mResult = "Real (R$) para Libra Esterlina (£)"
                cValue = 7.27
                break;
                        
        }

        var newValue = realValue * cValue
        message.innerHTML = mResult
        result.innerHTML = "R$ " + newValue
    }

    document.getElementById("realValue").value = ""
    
}

function chooseCurrency() {
    var currency = document.getElementsByName("currency")

    for (var i = 0; i < currency.length; i++) {
        
        if (currency[i].checked == true) {
            return currency[i].id
        }
    }
}