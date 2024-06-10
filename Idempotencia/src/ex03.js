const express = require('express');
const app = express();
app.use(express.json());

let pagamentos = {};

app.post('/pagamentos', (req, res) => {
    const { idempotency_key, amount, currency } = req.body;

    if (pagamentos[idempotency_key]) {
        res.status(200).send('Pagamento já processado');
    } else {
        pagamentos[idempotency_key] = { amount, currency };
        res.status(201).send('Pagamento processado com sucesso');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});