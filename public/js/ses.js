require('dotenv').config();

const AWS = require('aws-sdk');

const ses = new AWS.SES({
    accessKeyId: process.env.AWS_accessKeyId,
    secretAccessKey: process.env.AWS_secretAccessKey,
    region: 'us-west-2',
    
});

var params = {
    Destination: {
        // CcAddresses: ['',
        // ],

        ToAddresses: [process.env.Email
        ],
    },

    Message: {
        Body: {
            // Html: {
            //      Charset: "UTF-8",
            //      Data: "HTML_Format_Body"
            // },
            Text: {
                Charset: 'UTF-8',
                Data: ''
            },
        },
            Subject: {
                Charset: 'UTF-8',
                Data: ''
            }
        },
        Source: process.env.Email, //sender e-mail
        // ReplyToAddresses: [
        //     'email address'
        // ],
    };


exports.sendEmail =

    (req, res, next) => {
        
        params.Message.Body.Text.Data = req.body.Message+ '\nfrom '+req.body.email;
        params.Message.Subject.Data = "portfolio page e-mail from "+ req.body.name;
        
        ses.sendEmail(params, function(err, data){
            
            if(!err){
                res.render('afterEmail', {title: "Thanks"});
                return;
                
            }
            else {
                console.log(err.message);
                return;
            }
    
        })
    }

