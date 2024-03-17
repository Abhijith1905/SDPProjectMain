const facultycontroller = require("../controllers/facultycontroller")

const express = require("express")
const facultyrouter = express.Router()


facultyrouter.post("/checkfacultylogin",facultycontroller.checkfacultylogin)
facultyrouter.post("/checkemail",facultycontroller.checkemail)
facultyrouter.post("/resetfacultypassword",facultycontroller.resetfacultypassword)


module.exports = facultyrouter