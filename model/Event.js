import { Schema, model } from "mongoose"

// Define the schema
const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    attendees: {
        type: Number,
        required: true,
    },
}, { timestamps: true })

const Event = model('Event', eventSchema)

export default Event