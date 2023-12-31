const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

connectDB();

const port = process.env.PORT || 8000;

const app = express();

// app.use(cors(corsOptions));
app.use(
  cors({
    origin: "https://autocomplete-books.onrender.com",
    methods: "GET",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
