const Student = require("../models/Student")



  const checkstudentlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const student = await Student.findOne(input)
       response.json(student)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   const checkstudentid = async (request, response) => {
    const { studentid } = request.body;
    try {
      const user = await Student.findOne({ studentid });
      if (user) {
        response.send(true);
      } else {
        response.send(false);
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  const resetstudentpassword = async (request, response) => {
    const { studentid, newPassword } = request.body;
    try {
      const user = await Student.findOne({ studentid });
    
        user.password = newPassword;
        await user.save();
        response.send('Password reset successfully');
      
    } catch (error) {
      response.status(500).send(error.message);
    }
  };


  module.exports = {checkstudentlogin,checkstudentid,resetstudentpassword}