const AWS = require('aws-sdk');
const awsKey = require('../../credentials/aws');

const ses = new AWS.SES({
    accessKeyId: awsKey.access.accessKeyId,
    secretAccessKey: awsKey.access.secretAccessKey,
    region: 'us-west-2',
    //apiVersion: '2010-12-01'
});

var params = {
    Destination: {
        // CcAddresses: ['',
        // ],

        ToAddresses: ['minhocalgary@gmail.com',
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
        Source: '', //sender e-mail
        // ReplyToAddresses: [
        //     'email address'
        // ],
    };


exports.sendEmail =

    (req, res, next) => {
        
        console.log(req.body);
        
        params.Message.Body.Text.Data = req.body.Message;
        params.Message.Subject.Data = "portfolit page e-mail from "+ req.body.name;
        params.Source = req.body.email;

        var sendPromise = ses.sendEmail(params).promise();

        sendPromise.then(
            function(data) {
              console.log(data.MessageId);
            }).catch(
              function(err) {
              console.error(err, err.stack);
            });
        
    }

