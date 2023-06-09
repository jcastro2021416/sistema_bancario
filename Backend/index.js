'use strict'

const express = require('express');
const app = express();
const {connection} = require("./src/database/connection");
require('dotenv').config();
const port = process.env.PORT;
const routesU = require('./src/routes/user.routes')
const routesA = require("./src/routes/admin.routes")
const routesT = require("./src/routes/transferencia.routes")
const {defaultAdmin} = require('./adminDefault')
const cors = require('cors')

connection();

app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(cors());

app.use('/api', routesU, routesA, routesT)


app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})

defaultAdmin();
