const express = require('express')
const port = 3000
const app = express()
app.get(`/fotos`, (req, res) => {
  fetch(`https://api.unsplash.com/users/lukeskywalker`)
      .then(res =>res.json())
      .then(json => console.log(json))
})
app.listen(port, () => {
    console.log(`ejemplo de app listen de port ${port}`)
  })