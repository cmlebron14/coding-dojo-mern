// step 1 - part 1/2
const cors = require("cors");
const express = require('express');
const app = express();

// step 2
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// step 3
require("./config/mongoose.config");
require("./routes/product.routes")(app);

// step 1 - part 2/2
app.listen(8000, () => console.log("Listening on port: 8000"));