const studentcontroller = require("../controllers/studentcontroller")

const express = require("express")
const studentrouter = express.Router()


studentrouter.post("/checkstudentlogin",studentcontroller.checkstudentlogin)
studentrouter.post("/resetstudentpassword",studentcontroller.resetstudentpassword)
studentrouter.post("/checkstudentid",studentcontroller.checkstudentid)

module.exports = studentrouter