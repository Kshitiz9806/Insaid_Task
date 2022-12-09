require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./routes/user_router");

app.use(express.json());

app.use("/users", userRouter);

const server = app.listen(process.env.APP_PORT, () => {
    console.log("server started at " + server.address().address + ":" + server.address().port);
})