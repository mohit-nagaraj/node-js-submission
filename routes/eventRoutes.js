import { Router } from "express"

const eventRouter = Router()

eventRouter.get('/', (req, res) => {
    res.send('Hello World!')
})

export default eventRouter