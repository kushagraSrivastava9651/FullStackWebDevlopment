const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const item = require('./routes/item')
app.use('/api', item)


const birds = require('./routes/birds')
app.use('/birds', birds)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
