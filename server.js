const express = require("express");
const app = express();
app.use(express.json());
app.use(require("cors")());

let logs = [];

// salvar perguntas não respondidas
app.post("/log", (req,res)=>{
    logs.push(req.body);
    console.log("Pergunta sem resposta:", req.body);
    res.sendStatus(200);
});

// ver métricas
app.get("/logs",(req,res)=>{
    res.json(logs);
});

app.listen(3000,()=>console.log("Servidor rodando 🚀"));