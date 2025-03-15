const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const PI_API_KEY = process.env.PI_API_KEY; // Ensure your API key is in `.env`

if (!PI_API_KEY) {
    console.error("❌ PI_API_KEY is missing! Check your .env file.");
}

// Route to charge 1 Pi when posting a job
router.post("/pay-for-job", async (req, res) => {
    const { uid } = req.body; // Unique user ID from Pi authentication

    if (!uid) {
        return res.status(400).json({ success: false, error: "Missing user ID" });
    }

    try {
        const response = await axios.post(
            "https://api.minepi.com/v2/payments/pay", // Use the sandbox endpoint if testing
            {
                amount: 1, // Charge 1 Pi
                memo: "Payment for job posting on MyPiHire",
                metadata: { uid },
            },
            {
                headers: {
                    Authorization: `Key ${PI_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("✅ Job Post Payment Successful:", response.data);
        res.json({ success: true, data: response.data });
    } catch (error) {
        console.error("❌ Job Post Payment Error:", error.response ? error.response.data : error.message);
        res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
    }
});

module.exports = router;
