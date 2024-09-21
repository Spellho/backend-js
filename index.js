const express = require('express')

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/exercicio1/", (req, res) => {
    res.sendfile('./Pages/Exercicio1/index.html')
})
app.post("/exercicio1/", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    res.send("Resultado = "+ result)
})

app.get("/exercicio2/", (req, res) => {
    res.sendfile('./Pages/Exercicio2/index.html')
})
app.post("/exercicio2/", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 * num2;
    res.send("Resultado = "+ result)
})

app.get("/exercicio3/", (req, res) => {
    res.sendfile('./Pages/Exercicio3/index.html')
})
app.post("/exercicio3/", (req, res) => {
    const peso1 = Number(req.body.peso1);
    const peso2 = Number(req.body.peso2);
    const peso3 = Number(req.body.peso3);
    const peso4 = Number(req.body.peso4);
    const peso5 = Number(req.body.peso5);
    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
    res.send("Peso médio = "+ media)
})

app.get("/exercicio4/", (req, res) => {
    res.sendfile('./Pages/Exercicio4/index.html')
})
app.post("/exercicio4/", (req, res) => {
    const tempC = Number(req.body.tempC)
    const tempF = (9*tempC+160)/5
    res.send("Temperatura farenheit = "+ tempF+"°F")
})

app.get("/exercicio5/", (req, res) => {
    res.sendfile('./Pages/Exercicio5/index.html')
})
app.post("/exercicio5/", (req, res) => {
    const milhas = Number(req.body.milhas)
    const km = milhas * 1.60934
    res.send("Distância em quilômetros = "+ km)
})

app.get("/exercicio6/", (req, res) => {
    res.sendfile('./pages/Exercicio6/index.html')
})
app.post("/exercicio6/", (req, res) => {
    const h = Math.floor(Number(req.body.seg) / 3600)
    const m = Math.floor((Number(req.body.seg) / 60) % 60)
    const s = Number(req.body.seg) % 60
    res.send("Duração = "+h+"h"+m+"m"+s+"s")
})

app.get("/exercicio7/", (req, res) => {
    res.sendfile('./pages/exercicio7/index.html')
})
app.post("/exercicio7/", (req, res) => {
    const metros = req.body.km * 1000
    const centimetros = req.body.km * 100000
    res.send("Metros - "+metros+" Centímetros - "+centimetros)
})

app.get("/exercicio8/", (req, res) => {
    res.sendfile('./pages/exercicio8/index.html')
})
app.post("/exercicio8", (req, res) => {
    const x1 = Number(req.body.numero)
    const tabuada = ["Tabuada:",
    x1+"x1 = "+x1,
    x1+"x2 = "+x1*2,
    x1+"x3 = "+x1*3, 
    x1+"x4 = "+x1*4, 
    x1+"x5 = "+x1*5, 
    x1+"x6 = "+x1*6, 
    x1+"x7 = "+x1*7, 
    x1+"x8 = "+x1*8,
    x1+"x9 = "+x1*9,
    x1+"x10 = "+x1*10]
    res.send(tabuada)
})

app.get("/exercicio9/", (req, res) => {
    res.sendfile('./Pages/Exercicio9/index.html')
})
app.post("/exercicio9/", (req, res) => {
    const nota1 = Number(req.body.nota1);
    const nota2 = Number(req.body.nota2);
    const nota3 = Number(req.body.nota3);
    const media = (nota1 + nota2 + nota3) / 3;
    let estado;
    if (Number(media) >= 7) {
        estado = "Aprovado"
    } else if (Number(media) >= 5) {
        estado = "Recuperação"
    } else {
        estado = "Reprovado"
    }
    res.send("Média = "+ Number(media) + " " +estado)
})

app.get("/exercicio10/", (req, res) => {
    res.sendfile('./Pages/Exercicio10/index.html')
})
app.post("/exercicio10/", (req, res) => {
    const h = Number(req.body.h);
    const gender = req.body.gender;
    let imc;
    if (gender == "H") {
        imc = (72.7*h)-58
    } else if (gender == "M") {
        imc = (62.1*h)-44.7
    } else {
        imc = "Erro"
    }
    console.log(gender)
    res.send("IMC = "+ imc)
})

app.get("/exercicio11/", (req, res) => {
    res.sendfile('./Pages/Exercicio11/index.html')
})
app.post("/exercicio11/", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const op = req.body.op;
    let result
    if (op == "+") {
        result = num1+num2
    } else if (op == "-") {
        result = num1-num2
    } else if (op == "*") {
        result = num1*num2
    } else if (op == "/") {
        result = num1/num2
    } else {
        result = "Operação inválida"
    }
    res.send("Resultado = "+ result)
})

app.get("/exercicio12/", (req, res) => {
    res.sendfile('./Pages/Exercicio12/index.html')
})
app.post("/exercicio12/", (req, res) => {
    const num = Number(req.body.num);
    let msg
    if (num >= 0) {
        msg = "positivo"
    } else if (num < 0) {
        msg = "negativo"
    } else {
        msg = "Erro"
    }
    res.send("O número "+num+" é "+msg)
})

app.get("/exercicio13/", (req, res) => {
    res.sendfile('./Pages/Exercicio13/index.html')
})
app.post("/exercicio13/", (req, res) => {
    const num = Number(req.body.num);
    let msg
    if (num % 2 == 0) {
        msg = "par"
    } else if (num % 2 != 0) {
        msg = "ímpar"
    } else {
        msg = "Erro"
    }
    res.send("O número "+num+" é "+msg)
})

app.get("/exercicio14/", (req, res) => {
    res.sendfile('./Pages/Exercicio14/index.html')  
})
app.post("/exercicio14/", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    let msg
    if (num1 >= num2) {
        msg = num1
    } else if (num2 > num1) {
        msg = num2
    } else {
        msg = "Erro"
    }
    res.send("Maior número: "+msg)
})

app.get("/exercicio15/", (req, res) => {
    res.sendfile('./Pages/Exercicio15/index.html')  
})
app.post("/exercicio15/", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const num3 = Number(req.body.num3);
    const base = Number(req.body.base);
    const altura = Number(req.body.altura);
    let msg
    if (num1 >= num2+num3 | num2 >= num1+num3 | num3 >= num1+num2) {
        msg = " não formam um triândulo"
    } else {
        msg = " formam um trângulo de área: "+base*altura/2
    }
    res.send("Os valores "+num1+", "+num2+" e "+num3+msg)
})

app.get("/exercicio16/", (req, res) => {
    res.sendfile('./Pages/Exercicio16/index.html')  
})
app.post("/exercicio16/", (req, res) => {
    const cpf = Number(req.body.cpf);
    const numDep = Number(req.body.numDep);
    const renda = Number(req.body.renda);
    const salMin = 1500;
    let ali;
    let tax;

    if (renda <= salMin*2) {
        ali = 0
    } else if (renda > salMin*2 && renda <= salMin*3) {
        ali = renda*0.05
    } else if (renda > salMin*3 && renda <= salMin*5) {
        ali = renda*0.1
    } else if (renda > salMin*5 && renda <= salMin*7) {
        ali = renda*0.15
    } else {
        ali = renda*0.2
    }

    tax = ali - numDep*salMin*0.05;

    if (tax < 0) {
        tax=0
    }

    res.send("Imposto: "+tax)
})

app.get("/exercicio17/", (req, res) => {
    res.sendfile('./Pages/Exercicio17/index.html')
})
app.post("/exercicio17/", (req, res) => {
    const nota1 = Number(req.body.nota1);
    const nota2 = Number(req.body.nota2);
    const nota3 = Number(req.body.nota3);
    const media = (nota1*2 + nota2*3 + nota3*5) / 10;

    res.send("Média = "+ media)
})

app.get("/exercicio18/", (req, res) => {
    res.sendfile('./Pages/Exercicio18/index.html')
})
app.post("/exercicio18/", (req, res) => {
    const custoFab = Number(req.body.custoFab);
    const dist = 0.28;
    const tax = 0.45;
    const price = custoFab + custoFab*dist + custoFab*tax;

    res.send("Preço total: "+ price)
})

app.get("/exercicio19/", (req, res) => {
    res.sendfile('./Pages/Exercicio19/index.html')
})
app.post("/exercicio19/", (req, res) => {
    const juros = Number(req.body.juros);
    const taxa = Number(req.body.taxa);
    const taxaDec = taxa/100;
    const dias = Number(req.body.dias);
    const meses = Math.floor(dias/30);
    const valorCap = juros*(100/taxa)/meses;
    const total = valorCap+juros;
    console.log(meses)
    res.send("Valor do Capital: "+ valorCap +"  Taxa: "+ taxaDec +"    Valor Total: "+ total)
})

app.get("/exercicio20/", (req, res) => {
    res.sendfile('./Pages/Exercicio20/index.html')
})
app.post("/exercicio20/", (req, res) => {
    const IPI = Number(req.body.IPI);
    const code1 = Number(req.body.code1);
    const code2 = Number(req.body.code2);
    const valor1 = Number(req.body.valor1);
    const valor2 = Number(req.body.valor2);
    const quant1 = Number(req.body.quant1);
    const quant2 = Number(req.body.quant2);
    const valorTotal = (valor1*quant1 + valor2*quant2)*(1+(IPI/100))
    res.send("Valor Total: "+ valorTotal)
})

app.get("/exercicio21/", (req, res) => {
    res.sendfile('./Pages/Exercicio21/index.html')
})
app.post("/exercicio21/", (req, res) => {
    const quest1 = Number(req.body.quest1)
    const quest2 = Number(req.body.quest2)
    const quest3 = Number(req.body.quest3)
    const quest4 = Number(req.body.quest4)
    const quest5 = Number(req.body.quest5)
    const quest6 = Number(req.body.quest6)
    const quest7 = Number(req.body.quest7)
    const quest8 = Number(req.body.quest8)
    const questTotal = quest1+quest2+quest3+quest4+quest5+quest6+quest7+quest8;
    let state;

    if (questTotal<4) {
        state = "Inocente"
    } else if (questTotal==4) {
        state = "Suspeito do Crime"
    } else if (questTotal<8) {
        state = "Possível Criminoso"
    } else {
        state = "Assassino"
    }

    
})

app.get("/exercicio22/", (req, res) => {
    res.sendfile('./Pages/Exercicio22/index.html')
})
app.post("/exercicio22/", (req, res) => {
    const maxSpeed = Number(req.body.maxSpeed)
    const driverSpeed = Number(req.body.driverSpeed)
    let multa;

    if (driverSpeed>maxSpeed && driverSpeed<=maxSpeed*1.2) {
        multa=102
    } else if (driverSpeed>maxSpeed*1.2) {
        multa=500
    } else {
        multa=0
    }

res.send("Multa: "+ multa)
})

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})