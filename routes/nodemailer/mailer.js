const nodemailer = require('nodemailer');

let mailTransporter =
	nodemailer.createTransport(
		{
			service: 'gmail',
            host: "smtp.gmail.com", 
            port: 587,
            secure: false,
			auth: {
				user: 'capstonemithra@gmail.com',
				pass: 'omqaifaghcupzlrg'
			}
		}
	);


        const SENDMAIL = async (mailDetails, callback) => {
            try {
              const info = await mailTransporter.sendMail(mailDetails)
              callback(info);
            } catch (error) {
              console.log(error);
            } 
          };
          module.exports = SENDMAIL
