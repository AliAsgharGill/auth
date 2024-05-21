import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: true,
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },

      const mailOptions = {
        from: 'stylinalivlogs@gmail.com', 
        to: email, 
        subject: emailType === 'VERIFY' ? 'Verify Email' : 'Reset Password',        
        html: "<b>Hello world?</b>", 
      }
    });
  } catch (error) {}
};
