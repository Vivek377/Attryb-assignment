const express = require("express");
const cors = require("cors");
const connection = require("./db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


app.listen(process.env.PORT, async (req, res) => {
    try {
        await connection;
        console.log("connected");
    } catch (e) {
        console.log(e);
    }
})

