import Event from "../model/Event.js"

export const addEvent = async (req, res) => {
    const { name, date, location, attendees } = req.body

    try {
        const data = await Event.create({
            name,
            date,
            location,
            attendees
        })
        res.status(201).json({
            message: "Event created successfully",
            data
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}