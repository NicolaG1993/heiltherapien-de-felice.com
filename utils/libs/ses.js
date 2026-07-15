import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export default transporter;

export async function contactUs({
    recipient,
    source,
    email,
    message,
    subject,
    name,
}) {
    try {
        const info = await transporter.sendMail({
            from: source,
            to: recipient,
            subject: subject,
            html: `<html>
                <body>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </body>
            </html>`,
        });
        console.log("Email sent successfully:", info.messageId);
        return { emailSended: true, messageId: info.messageId };
    } catch (err) {
        console.log("err in contactUs:", err);
        return {
            statusCode: 500,
            body: `Message unsuccessfully sent, error: ${err.message}`,
            error: err,
        };
    }
}
