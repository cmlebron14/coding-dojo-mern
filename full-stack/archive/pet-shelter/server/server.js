const cors = require("cors");
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/pet.routes")(app);

app.listen(8000, () => console.log("Listening on port: 8000"));