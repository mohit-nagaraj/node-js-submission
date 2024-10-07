import { Router } from "express"
import { addEvent } from "../controllers/eventController.js"

const eventRouter = Router()

eventRouter.post('/create', addEvent)

export default eventRouter