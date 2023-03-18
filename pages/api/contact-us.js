import { contactUs } from "@/utils/libs/ses";

export default async function handler(req, res) {
    const { body, method } = req;
    if (method === "POST") {
        try {
            const { name, email, betreff, inhalt } = body;
            let emailData = {
                name: name,
                recipient: email,
                source: "Heiltherapien De Felice <adefelice@t-online.de>",
                subject: betreff,
                message: inhalt,
            };
            let response = await contactUs(emailData);
            res.send(response);
        } catch (err) {
            console.log("🐞 ERROR: ", err);
            res.status(500).json({ message: "Error occured." });
        }
    } else {
        return res.status(404).send("Not found");
    }
}
