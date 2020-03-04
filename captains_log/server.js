const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logsRouter = require("./routes/log");

// Middlewares
app.use(express.json());

// Connect to DB
mongoose.connect("mongodb://localhost:27017/basket", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
    console.log("CONNECTED TO MONGO SUCCESS");
});

// Routes Middleware
app.use("/logs", logsRouter);

// PORT
const PORT = process.env.PORT || 5000;

// Listen on the port
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
