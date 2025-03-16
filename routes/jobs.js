const express = require("express");
const router = express.Router();
const { db } = require("../utils/firebaseConfig");

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("jobs").get();
    const jobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json({ jobs });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs", details: error.message });
  }
});

// POST a new job
router.post("/", async (req, res) => {
  try {
    const newJob = req.body;
    const docRef = await db.collection("jobs").add(newJob);
    res.json({ success: true, jobId: docRef.id });
  } catch (error) {
    res.status(500).json({ error: "Failed to create job", details: error.message });
  }
});

module.exports = router;
