const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Mongo db setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => console.log("The db is successfull setup"));

// App initialization
const app = express();

// App routers
const todosRouter = require("./routers/todos");

// App middlewares
app.use(express.json());
app.use(cors());
app.use("/todos", todosRouter);

// App configuration
const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`The server is successfully running on port: ${port}`)
);