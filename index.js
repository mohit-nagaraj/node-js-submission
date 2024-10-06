import express from 'express'
import eventRouter from './routes/eventRoutes.js'

const app = express()
const port = 3000

app.use(express.json())

app.use(eventRouter)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})