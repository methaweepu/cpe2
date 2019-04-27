const express = require('express')
const app = express()
const port = 9001

app.get('/', (req, res) =>
  res.send('Greetings from methawee...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
