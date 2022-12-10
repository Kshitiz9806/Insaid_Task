require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./routes/user_router");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

const server = app.listen(process.env.APP_PORT, () => {
    console.log("server started at " + server.address().address + ":" + server.address().port);
})