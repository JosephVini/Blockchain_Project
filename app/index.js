const express = require('express');
const Blockchain = require('../blockchain');
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const P2pServer = require('./p2p-server');

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

app.get('/blocks', (req, res) => {
    res.json(bc.chain);
});

app.use(express.json());

app.post('/mine', (req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log(`New block added: \n${block.toString()}`);

    p2pServer.syncChains(); 

    res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});

p2pServer.listen();
