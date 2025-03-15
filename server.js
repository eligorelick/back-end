const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/users", require("./routes/users"));
app.use("/api/pi-payment", require("./routes/piPayment"));
app.use("/api/applications", require("./routes/applications"));

app.listen(5000, () => console.log("Server running on port 5000"));
