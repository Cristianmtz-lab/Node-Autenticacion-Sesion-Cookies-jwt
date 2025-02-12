import express from 'express'
import { PORT } from './config.js'
import { UserRepositoty } from './user-repository.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hola!')
})

app.post('/login', (req, res) => { })
app.post('/register', (req, res) => {
  const { username, password } = req.body
  console.log(req.body)

  try {
    const id = UserRepositoty.create({ username, password })
    res.send({ id })
  } catch (error) {
    // normalmente no es buena idea enviar el error del repo | ver video de manejo de errores
    res.status(400).send(error.message)
  }
})
app.post('/logout', (req, res) => { })

app.get('/protected', (req, res) => { })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
