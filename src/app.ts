import express, { Application, Request, Response } from 'express'
import * as crypto from './crypto'
import logger from 'morgan'

const app: Application = express()
const port = process.env.PORT || '8080'

app.use(logger('dev'))

app.get('/', (req, res) => {
  res.status(200).send('<H1>Hello from Node!</H1>')
})

app.get('/health/check', (req, res) => {
  res.status(200).send('Nodes is up!')
})

app.get('/health/readiness', (req, res) => {
  res.status(200).send('Node is ready!')
})

app.listen(port, () => {
  // if (err) return console.error(err)
  return console.log(`server is listening on ${port}`)
})
