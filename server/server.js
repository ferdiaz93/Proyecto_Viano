const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const HomeController = require("./controllers/homeController");
const AdminController = require("./controllers/adminController");

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", HomeController.getHome);
app.get("/adminlogin", AdminController.getAdmin);
app.get("/admintest", AdminController.getAdminTest);

app.listen(5500, function(){
    console.log("Puerto 5500 habilitado");
});
