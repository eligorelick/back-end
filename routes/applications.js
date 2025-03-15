const express = require("express");
const router = express.Router();
const { db } = require("../firebaseConfig");

// Apply for a job
router.post("/", async (req, res) => {
    const { jobId, freelancerId } = req.body;

    try {
        await db.collection("applications").add({ jobId, freelancerId, status: "pending" });
        res.json({ success: true, message: "Application submitted" });
    } catch (error) {
        res.status(500).json({ error: "Error applying for job" });
    }
});

module.exports = router;
