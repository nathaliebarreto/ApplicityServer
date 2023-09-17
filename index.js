require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3001;
const usersRoutes = require('./routes/usersRoutes');
const companiesRoutes = require('./routes/companiesRoutes'); //working
const reviewsRoutes = require('./routes/reviewsRoutes');
const applicationsRoutes = require('./routes/applicationsRoutes');

app.use(cors())
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Sup MTV, welcome to my crib!");
});

app.use("/users", usersRoutes);
app.use("/companies", companiesRoutes);
app.use("/reviews", reviewsRoutes);
app.use("/applications", applicationsRoutes);


app.listen(port, () => {
    console.log(`🪩  Your server is running on http://localhost:${port} LETS GOOOO!!!🚀`);
});
