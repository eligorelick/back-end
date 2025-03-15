const express = require("express");
const router = express.Router();
const { db } = require("../firebaseConfig");

// Get all jobs
router.get("/", async (req, res) => {
    try {
        const jobsSnapshot = await db.collection("jobs").get();
        const jobs = jobsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: "Error fetching jobs" });
    }
});

// Post a new job
router.post("/", async (req, res) => {
    const { title, description, price } = req.body;
    try {
        await db.collection("jobs").add({ title, description, price, createdAt: new Date() });
        res.json({ success: true, message: "Job posted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error posting job" });
    }
});

module.exports = router;
