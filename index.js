// start your server here
const server = require('./api/server');



server.listen(9000, () => {
    console.log("---server listening on port 9000---");
})