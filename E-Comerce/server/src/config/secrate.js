require("dotenv").config();



const port = process.env.PORT || 5000;
const db_uri = process.env.DB_Connect_URL;
const secrateKey = process.env.KEY_SECRATE;

module.exports = {
    port,
    db_uri,
    secrateKey
}