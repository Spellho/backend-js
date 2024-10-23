const { somar, multiplicar, media5, CToF } = require('../service/exercicios')
const { describe, it, expect } = require('@jest/globals')

describe('testando a função somar: ', () => {
    
    it('Somar dois números positivos', () => {
        const resultado = somar(1, 2);

        console.log(resultado)
        expect(resultado).toBe(3)
    })

    it('Somar um número negativo com um positivo', () => {
        const resultado = somar(-1, 2);

        console.log(resultado)
        expect(resultado).toBe(1)
    })

    it('Somar um número positivo com um negativo', () => {
        const resultado = somar(1, -2);

        console.log(resultado)
        expect(resultado).toBe(-1)
    })

    it('Somar um número negativo com zero', () => {
        const resultado = somar(-1, 0);

        console.log(resultado)
        expect(resultado).toBe(-1)
    })

    it('Somar um número positivo com uma letra', () => {
        const resultado = somar(1, 'a');

        console.log(resultado)
        expect(resultado).toBe('erro')
    })

    it('Somar uma letra com um número positivo', () => {
        const resultado = somar('b', 2);

        console.log(resultado)
        expect(resultado).toBe('erro')
    })

    it('Somar um número negativo com uma letra', () => {
        const resultado = somar(-1, 'a');

        console.log(resultado)
        expect(resultado).toBe('erro')
    })

    it('Somar uma letra com um número negativo', () => {
        const resultado = somar('b', -2);

        console.log(resultado)
        expect(resultado).toBe('erro')
    })

})

describe('testando a função multiplicar: ', () => {

    it('Multiplicar dois números positivos', () => {
        const resultado = multiplicar(2, 3);

        console.log(resultado)
        expect(resultado).toBe(6)
    })

    it('Multiplicar um número negativo por um positivo', () => {
        const resultado = multiplicar(-2, 3);

        console.log(resultado)
        expect(resultado).toBe(-6)
    })

    it('Multiplicar um número positivo por um negativo', () => {
        const resultado = multiplicar(2, -3);

        console.log(resultado)
        expect(resultado).toBe(-6)
    })

    it('Multiplicar um número negativo por zero', () => {
        const resultado = multiplicar(-2, 0);

        console.log(resultado)
        expect(resultado).toBe(-0)
    })

    it('Multiplicar um número positivo por uma letra', () => {
        const resultado = multiplicar(2, 'a');

        console.log(resultado)
        expect(resultado).toBe('erro')
    })

    it('Multiplicar uma letra por um número positivo', () => {
        const resultado = multiplicar('b', 3);

        console.log(resultado)
        expect(resultado).toBe('erro')
    })

    it('Multiplicar um número negativo por uma letra', () => {
        const resultado = multiplicar(-2, 'a');

        console.log(resultado)
        expect(resultado).toBe('erro')
    })

    it('Multiplicar uma letra por um número negativo', () => {
        const resultado = multiplicar('b', -3);

        console.log(resultado)
        expect(resultado).toBe('erro')
    })

})

describe('testando a função media5', () => {

    it('Media de cinco números positivos', () => {
        const resultado = media5(1, 2 ,3 ,4 ,5);

        console.log(resultado)
        expect(resultado).toBe(3)
    })

    it('Media de quatro números positivos e um negativo', () => {
        const resultado = media5(1, 2, 3, 4, -5);

        console.log(resultado)
        expect(resultado).toBe(1)
    })

    it('Media de quatro números positivos e uma letra', () => {
        const resultado = media5(1, 2, 3, 4, 'a')
        console.log(resultado)

        expect(resultado).toBe('erro')
    })

})

describe('testando a função CToF', () => {
    
    it('TempC positiva para F', () => {
        const resultado = CToF(20);

        console.log(resultado)
        expect(resultado).toBe(68)
    })

    it('TempC negativa para F', () => {
        const resultado = CToF(-20);

        console.log (resultado)
        expect(resultado).toBe(-4)
    })

    it('TempC letra para F', () => {
        const resultado = CToF('a');
        
        console.log(resultado)
        expect(resultado).toBe('erro')
    })

})