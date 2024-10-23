function somar(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        return 'erro'
    }
    return Number(num1) + Number(num2)
}

function multiplicar(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        return 'erro'
    }
    return Number(num1) * Number(num2)
}

function media5(num1, num2, num3, num4, num5) {
    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        return 'erro'
    }
    return (Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5))/5
}

function CToF(tempC) {
    if (isNaN(tempC)) {
        return 'erro'
    }

    return ((9*Number(tempC)+160)/5)
}

module.exports = { somar, multiplicar, media5, CToF }