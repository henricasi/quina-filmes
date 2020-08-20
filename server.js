const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const nodemailer = require("nodemailer");

require('dotenv').config()

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// make req.body available
app.use(express.json());

// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Nodemailer

const transporter = nodemailer.createTransport({
  host: 'smtp.umbler.com',
  port: 587,
  auth: {
      user: 'contato@quinafilmes.com.br',
      pass: process.env.MAIL_PASS
  }
});

app.post('/sendmail', (req, res, next) => {
  let {name, email, message} = req.body;
  let content = `Nome: ${name} \n Email: ${email} \n Mensagem: ${message}`;
  let mail = {
    from: `${name} <contato@quinafilmes.com.br>`,
    to: 'Quina filmes <contato@quinafilmes.com.br>',
    subject: "Formulário de contato",
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(500).json({
        message: 'Houve um erro ao enviar a mensagem.'
      })
      console.log('Error sending message:', err)
    } else {
      res.json({
        message: 'Mensagem enviada com sucesso!'
      })
      console.log('Mensagem enviada com sucesso!')
    }
  })
})

// Handles any requests that don't match the ones above
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);