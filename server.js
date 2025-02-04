require('dotenv').config(); 
const mongoose = require('mongoose');
const express = require('express');
const router = require('./src/routes/routes.js');

//inicialização do servidor
const app = express();
const PORT = process.env.PORT || 3000;

//configuração de middlewares
app.use(express.json());
app.use('/students', router);

//conexão com banco de dados
mongoose.connect(process.env.MONGODB_URL);

//verificação da conexão com o banco de dados
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

//tratamento de erros na conexão de dados
mongoose.connection?.once('error', (err) => {
    console.error('Failed to connect to MongoDB:', err);
});

//middleware de tratamento de erros
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
