require("dotenv").config();
// require("./config/database")
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { onConnection } = require("./socket")
const port = process.env.PORT;
const trackerRouter = require("./src/routes/trackerRoutes/track.routes")
const userRouter = require("./src/routes/userRoutes/user.routes")
// const { initializeRoutes } = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter)
app.use("/book-ride", trackerRouter)
// app = initializeRoutes(app);
app.get("/", (req, res) => {
    res.status(200).send({
        success: true,
        message: "welcome to the beginning of greatness",
    });
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

// io.on("connection", (socket) => {
//     console.log("We are live and connected");
//     console.log(socket.id);
// });
io.on("connection", onConnection(io))

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});