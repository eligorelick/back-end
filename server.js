const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Existing routes
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/users", require("./routes/users"));
app.use("/api/pi-payment", require("./routes/piPayment"));
app.use("/api/applications", require("./routes/applications"));

// ✅ New Chat routes added clearly here
app.use("/api/chat", require("./routes/chatRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
