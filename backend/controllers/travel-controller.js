const Travel = require('../model/travel'); // Adjust the path to your Travel model

const createTravel = async (req, res, next) => {
    const { name, jobType, description, dateFrom, dateTo } = req.body;

    // Validate that all fields are provided
    if (!name || !jobType || !description || !dateFrom || !dateTo) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Check if a travel entry with the same name already exists
    let existingTravel;
    try {
        existingTravel = await Travel.findOne({ name });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }

    if (existingTravel) {
        return res.status(400).json({ message: "Trip already exists" });
    }

    // Create a new Travel entry
    const travel = new Travel({
        name,
        jobType,
        description,
        dateFrom,
        dateTo,
        
    });

    try {
        // Save the new travel entry to the database
        await travel.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }

    // Respond with a success message and the created travel entry
    return res.status(201).json({
        message: "Travel entry created successfully",
        travel
    });
};

module.exports = { createTravel };