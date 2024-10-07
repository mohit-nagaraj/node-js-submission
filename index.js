import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectToDatabase from './config/dbConfig.js'
import eventRouter from './routes/eventRoutes.js'
import logger from './utils/logger.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

connectToDatabase()

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`)
    next()
});

app.get('/health', (req, res) => {
    res.status(200).send('Server is running')
});

app.use('/api/v0/events', eventRouter)

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`)
})