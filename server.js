const express = require("express");
const app = express();
const PORT = 8000;

const Caesar = require('caesar-salad').Caesar;
const Vigenere = require('caesar-salad').Vigenere;
const password = 'derParol';

app.get("/", (req, res) => {
    res.send('Hello');
});

app.get("/encode/:echo", (req, res) => {
    res.send(
        Vigenere.Cipher(password).crypt(req.params.echo));
});

app.get("/decode/:echo", (req, res) => {
    res.send(
        Vigenere.Decipher(password).crypt(req.params.echo));
});

app.listen(PORT, () => {
    console.log('8000');
});