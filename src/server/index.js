const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer")

const { email, password, port } = require('../../config.js')
 
const app = express();

app.use(cors());
const jsonParser = bodyParser.json()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: email, 
    pass: password 
  }
})
 
app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    })
})

app.post('/sendEmail', jsonParser, async (req, res) => {
  let info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: email, // list of receivers
    subject: req.body.subject,
    text: req.body.email,
    html: req.body.text,
  })
  if (info.messageId) {
    res.send(true)
  } else {
    res.send(false)
  }
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

