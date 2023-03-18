const aws = require("aws-sdk");
const SES = new aws.SES({
    accessKeyId: process.env.REACT_AWS_KEY,
    secretAccessKey: process.env.REACT_AWS_SECRET,
    region: "eu-central-1",
});

export default SES;

export function contactUs({
    recipient,
    source,
    email,
    message,
    subject,
    name,
}) {
    return SES.sendEmail({
        Source: source,
        // Source: recipient,
        Destination: {
            ToAddresses: [recipient],
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    // Data: 'This message body contains HTML formatting. It can, for example, contain links like this one: <a class="ulink" href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide" target="_blank">Amazon SES Developer Guide</a>.',
                    Data: `<html>
                                <body>
                                    Name: ${name}
                                    <br />
                                    Email: ${email}
                                    <br />
                                    <br />
                                    Inhalt: ${message}
                                </body>
                            </html>`,
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "",
                    // Data: message,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject,
            },
        },
    })
        .promise()
        .then((res) => ({ ...res, emailSended: true }))
        .catch((err) => {
            console.log("err in ses.sendEmail: ", err);
            return {
                statusCode: 500,
                body: `Message unsuccesfully sent, error: ${err}`,
                error: err,
            };
        });
}
