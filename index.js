const express = require('express')

const app = express();

app.get("/exercicio1/", (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    const result = Number(num1) + Number(num2)
    res.json({result})
})

app.get("/exercicio2/", (req, res) => {
    const valor = req.query.valor
    const horas = req.query.horas
    const result = Number(valor) * Number(horas)
    res.json({result})
})

app.get("/exercicio3/", (req, res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2
    const num3 = req.query.num3
    const num4 = req.query.num4
    const num5 = req.query.num5
    const result = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5))/5
    res.json({result})
})

app.get("/exercicio4/", (req, res) => {
    const tempC = req.query.tempC
    const tempF = (9*Number(tempC)+160)/5
    res.json({tempF})
})

app.get("/exercicio5/", (req, res) => {
    const milhas = req.query.milhas
    const km = Number(milhas) * 1.60934
    res.json({km})
})

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})