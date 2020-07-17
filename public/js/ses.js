const AWS = require('aws-sdk');
const awsKey = require('../../credentials/aws');

const ses = new AWS.SES({
    accessKeyId: awsKey.access.accessKeyId,
    secretAccessKey: awsKey.access.secretAccessKey,
    region: 'us-west-1'
});

var params = {
    Destination: {
        CcAddresses: ['korminhokor@naver.com',
        ],

        ToAddresses: ['minhocalgary@gmail.com',
        ],
    },

    Message: {
        Body: {
            // Html: {
            //     Charset: "UTF-8",
            //     Data: "HTML_Format_Body"
            // },
            Text: {
                Charset: '',
                Data: ''
            },

            Subject: {
                Charset: '',
                Data: ''
            }
        },
        Source: '', //sender e-mail
        // ReplyToAddresses: [
        //     'email address'
        // ],
    },
};

exports.sendEmail =

    (req, res, next) => {
            
        console.log(req.body);
        
        
    }

