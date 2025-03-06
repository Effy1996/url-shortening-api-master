const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(cors());

// Serve the static files from the React build folder
app.use(express.static(path.join(__dirname, "build")));

// Endpoint to shorten URLs
app.post("/shorten", async (req, res) => {
    try {
      const { url } = req.body;
  
      if (!url) {
        res.status(400).json({ error: "URL is required" });
        return;
      }
  
      const response = await axios.post("https://cleanuri.com/api/v1/shorten", new URLSearchParams({ url }));
  
      res.json(response.data); 
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to shorten URL" });
    }
  });

// Catch-all route to serve the React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});