const express = require('express')
const projectRouter = require('./project/router');
const resourceRouter = require("./resource/router");
const taskRouter = require('./resource/router');



const server = express();

server.use(express.json())

server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)
server.use((err, req, res, next) => {
    res.status(404).json({message: err.message || "not found"})
})
module.exports = server;
