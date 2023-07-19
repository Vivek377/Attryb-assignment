const express = require("express");
const cors = require("cors");
const connection = require("./db");
const dealersRoute = require("./routes/dealers.route");
const inventoryRoute = require("./routes/inventory.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/dealers", dealersRoute);
app.use("/inventory", inventoryRoute);


app.listen(process.env.PORT, async (req, res) => {
    try {
        await connection;
        console.log("connected");
    } catch (e) {
        console.log(e);
    }
})

