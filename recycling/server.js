const express = require('express');
const cors = require("cors");

const app = express();
app.use(
    cors({
        origin: [
            "http://localhost:3000"
        ],
        credentials: true,
    }),
);
app.use((req, res, next) => {
    res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");
    next();
});


// Define a route that handles GET requests
app.get('/getItems', (req, res) => {
  // Define JSON data to be returned
  const jsonData = {
    data: [
      { id: 1, title: 'Item 1', content: "Item 1", image : "https://i.etsystatic.com/20931094/r/il/9bf93f/4746438886/il_fullxfull.4746438886_3mp6.jpg"},
      { id: 2, title: 'Item 2', content: "Item 1", image : "https://i.etsystatic.com/20931094/r/il/9bf93f/4746438886/il_fullxfull.4746438886_3mp6.jpg" },
      { id: 3, title: 'Item 3', content: "Item 1", image : "https://i.etsystatic.com/20931094/r/il/9bf93f/4746438886/il_fullxfull.4746438886_3mp6.jpg" }
    ]
  };

  // Send JSON response
  res.json(jsonData);
});

app.get('/getItem/:id', (req, res) => {
    const id = req.params.id
    // Define JSON data to be returned
    const jsonData = {
      data: [
        { id: 1, title: 'Item 1', content: "Item 1", image : "https://i.etsystatic.com/20931094/r/il/9bf93f/4746438886/il_fullxfull.4746438886_3mp6.jpg"},
        { id: 2, title: 'Item 2', content: "Item 1", image : "https://i.etsystatic.com/20931094/r/il/9bf93f/4746438886/il_fullxfull.4746438886_3mp6.jpg" },
        { id: 3, title: 'Item 3', content: "Item 1", image : "https://i.etsystatic.com/20931094/r/il/9bf93f/4746438886/il_fullxfull.4746438886_3mp6.jpg" }
      ]
    };
  
    // Send JSON response
    res.json(jsonData);
  });

// Start the Express server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
