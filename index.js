import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const port = process.env.PORT || 3000
const isDevelopment = process.env.NODE_ENV || 'development'
const app = express()

app.use(cors())
app.use(morgan(isDevelopment ? 'dev' : 'combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
})

app.listen(port, () => {
  console.log('Application listening on port ' + port)
})
