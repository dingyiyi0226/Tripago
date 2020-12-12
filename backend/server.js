import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000

app.post('/upload', (req, res) => {
    console.log('get')
    console.log(req)
    console.log(req.body)
    res.send('received get')
})

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!')
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})