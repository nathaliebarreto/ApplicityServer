const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());

app.get("/",(request,response)=>{
    response.send("Sup MTV, welcome to my crib!");
});

// app.use("/users", users);
// app.use("/discexam", exam);
// app.use("/answers", answers)
// app.use("/user", user);
// app.use("/discpersonalities", discPersonalities)


app.listen(port, () => {
    console.log(`Your server is running on http://localhost:${port} LETS GOOOO`);
});
