const app = require("./app")
const {port} = require("./config/secrate")
const {connectMongoo} = require("./config/db");




app.listen(port, ()=>{
    connectMongoo()
    console.log(`this server will start http://localhost:${port}`)
})