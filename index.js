const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const cors = require("cors");

const app = express();
const router = require("./router");

const dotenv = require("dotenv");
dotenv.config();


mongoose
    .connect(process.env.MONGODB_URL, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});

