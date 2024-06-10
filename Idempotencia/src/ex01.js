const express = require('express');
const app = express();
app.use(express.json());

let produtos = {
    12345: { quantidade: 5 }
};

app.put('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const quantidade = req.body.quantidade;

    if (produtos[id]) {
        produtos[id].quantidade = quantidade;
        res.status(200).send(`Quantidade do produto ${id} atualizada para ${quantidade}`);
    } else {
        res.status(404).send('Produto não encontrado');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});