const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/shorten", async (req, res) => {
    try {
        const response = await axios.post("https://cleanuri.com/api/v1/shorten", new URLSearchParams(req.body));
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error shortening URL" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
