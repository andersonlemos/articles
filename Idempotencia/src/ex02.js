const express = require('express');
const app = express();
app.use(express.json());

let pedidos = {
    98765: { status: 'pendente' }
};

app.put('/pedidos/:id/enviar', (req, res) => {
    const id = req.params.id;
    if (pedidos[id]) {
        pedidos[id].status = 'enviado';
        res.status(200).send(`Pedido ${id} marcado como enviado`);
    } else {
        res.status(404).send('Pedido não encontrado');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});