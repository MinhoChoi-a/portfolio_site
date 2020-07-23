const AWS = require('aws-sdk');
const awsKey = require('../../credentials/aws');
const email = require('../../credentials/email');

const ses = new AWS.SES({
    accessKeyId: awsKey.access.accessKeyId,
    secretAccessKey: awsKey.access.secretAccessKey,
    region: 'us-west-2',
    
});

var params = {
    Destination: {
        // CcAddresses: ['',
        // ],

        ToAddresses: [email.email,
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
        Source: email.email, //sender e-mail
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
                console.log(data.MessageId);
                res.render('afterEmail', {title: "thanks"});
                return;
                
            }
            else {
                console.log(err.message);
                return;
            }
    
        })
    }

