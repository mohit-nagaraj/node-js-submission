import Event from "../model/Event.js";

export const addEvent = async (req, res) => {
    const { name, date, location, attendees } = req.body;

    try {
        const modified_date = new Date(date);
        
        // Create the event
        const data = await Event.create({
            name,
            date: modified_date,
            location,
            attendees
        });

        res.status(201).json({
            message: "Event created successfully",
            data
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getEvents = async (req, res) => {
    try {
        const data = await Event.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getEvent = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Event.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params;
    
    try {
        const data = await Event.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            message: "Event updated successfully",
            data
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        await Event.findByIdAndDelete(id);
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}