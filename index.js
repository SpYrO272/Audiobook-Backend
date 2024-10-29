// import json server
const jsonserver = require('json-server')

//create server
const mediaPlayerServer = jsonserver.create()

//create middleware to covert the json format
const middleware = jsonserver.defaults()
//import data.json file
const router = jsonserver.router("data.json")

// set port for the server
const PORT = 5000 || process.env.PORT 

//server use middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)
// listen()
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})