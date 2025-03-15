const express = require("express");
const router = express.Router();
const { auth } = require("../firebaseConfig");

// Get user info
router.get("/:uid", async (req, res) => {
    const { uid } = req.params;
    try {
        const user = await auth.getUser(uid);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "User not found" });
    }
});

module.exports = router;
