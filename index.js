const express = require('express');
const{connectToMongoDB} = require('./connect.js');
const urlRoute = require('./routes/url');
const URL = require('./models/url.js');
const path = require('path');

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log("MongoDB  connected"));

// Middlewares:
// If below middleware is not used, it will not fetch body data
app.use(express.json());

// Add CORS middleware for frontend integration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use("/url", urlRoute);

// Serve static files from frontend build directory
app.use(express.static(path.join(__dirname, 'frontend/dist')));

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } }
    );
    // Prevent crash if shortId is not found
    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    // Redirect to the original URL
    return res.redirect(entry.redirectURL);
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

app.listen(PORT, ()=> console.log(`Server started at PORT: ${PORT}`));