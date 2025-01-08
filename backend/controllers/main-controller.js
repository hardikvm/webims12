const Travel = require('../model/travel');  // Import Travel model

const getAllTravels = async (req, res) => {
    try {
        // Fetch all travel requests from the database
        const travels = await Travel.find();

        // Return the result as a response
        return res.status(200).json({ travels });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getAllTravels };