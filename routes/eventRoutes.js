import { Router } from "express"
import { addEvent, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/eventController.js"

const eventRouter = Router()

eventRouter.get('/', getEvents)
eventRouter.get('/:id', getEvent)
eventRouter.post('/create', addEvent)
eventRouter.patch('/:id',updateEvent)
eventRouter.delete('/:id', deleteEvent)

export default eventRouter