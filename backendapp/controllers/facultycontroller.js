const Faculty = require("../models/Faculty")
const Student = require("../models/Student")

  const checkfacultylogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const faculty = await Faculty.findOne(input)
       response.json(faculty)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   const checkemail = async (request, response) => {
    const { email } = request.body;
    try {
      const user = await Faculty.findOne({ email });
      if (user) {
        response.send(true);
      } else {
        response.send(false);
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  const resetfacultypassword = async (request, response) => {
    const { email, newPassword } = request.body;
    try {
      const user = await Faculty.findOne({ email });
      if (user) {
        user.password = newPassword;
        await user.save();
        response.send('Password reset successfully');
      } else {
        response.send('email not found');
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
   
  
   
   

  

  module.exports = {checkfacultylogin,checkemail,resetfacultypassword}