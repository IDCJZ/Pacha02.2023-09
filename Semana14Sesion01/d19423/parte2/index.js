const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar las peticiones del chat
app.post('/chat', async (req, res) => {
  const { message } = req.body;
console.log(message);
const apikey =  process.env.OPENAI_API_KEY;
console.log(apikey)
  try {
    const chatGPTResponse = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: message,
      max_tokens: 100,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const botMessage = chatGPTResponse.data.choices[0].text.trim();
    res.json({ message: botMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
