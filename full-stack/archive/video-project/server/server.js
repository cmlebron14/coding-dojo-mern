const express = require("express");
const app = express();

// reading json data and allowing for POST data (express - routing)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. run database
require("./config/mongoose.config");
// 2. bring in routes
require("./routes/shark.routes")(app);

app.listen(8000, () => console.log("Listening on port: 8000"));