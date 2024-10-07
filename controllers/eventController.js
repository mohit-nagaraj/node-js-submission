import Event from "../model/Event.js";

// Add an event
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

// Get all events
export const getEvents = async (req, res) => {
    try {
        // finding all events by calling the find method without any arguments
        const data = await Event.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single event
export const getEvent = async (req, res) => {
    const { id } = req.params;

    try {
        // since we have the id, we can use the findById method to find the event
        const data = await Event.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update an event
export const updateEvent = async (req, res) => {
    const { id } = req.params;
    
    try {
        // findByIdAndUpdate method is used to find the event by id and update it
        //this way what is passed in the req.body will be updated in the event
        const data = await Event.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            message: "Event updated successfully",
            data
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete an event
export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        // findByIdAndDelete method is used to find the event by id and delete it
        await Event.findByIdAndDelete(id);
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}