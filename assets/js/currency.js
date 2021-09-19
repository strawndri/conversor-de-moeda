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
                mResult = "Dólar Americano (U$) para Real (R$)"
                cValue = 5.29
                break;

            case ("euro"):
                mResult = "Euro (€) para Real (R$)"
                cValue = 6.20
                break;

            case ("bitcoin"):
                mResult = "Bitcoin (BTC) para Real (R$)"
                cValue = 253527.72
                break;

            case ("swissFranc"):
                mResult = "Franco Suíço (CHF) para Real (R$)"
                cValue = 5.67
                break;

            case ("argentinePeso"):
                mResult = "Peso Argentino ($) para Real (R$)"
                cValue = 0.054
                break;

            case ("japaneseYen"):
                mResult = "Iene (¥) para Real (R$)"
                cValue = 0.048
                break;

            case ("poundSterling"):
                mResult = "Libra Esterlina (£) para Real (R$)"
                cValue = 7.27
                break;
                        
        }

        var newValue = (realValue * cValue).toFixed(2)
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