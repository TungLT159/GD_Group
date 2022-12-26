const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const mainRoutes = require("./routes/index");
const MONGODB_URI =
    "mongodb+srv://tunglt:dvalvuumm1ty1@cluster0.anycnsd.mongodb.net/GDVN?retryWrites=true&w=majority";

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(mainRoutes);

mongoose
    .connect(MONGODB_URI)
    .then((result) => {
        app.listen(3001);
    })
    .catch((err) => console.log(err));