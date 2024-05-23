const twilio = require('twilio');
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = twilio(accountSid, authToken);

const sendMessage = async (req, res) => {
    try {
        const { message, to } = req.body;

        
        if (!message || !to) {
            return res.status(400).json({
                message: "Please provide both message and recipient (to) fields."
            });
        }

        
        await client.messages.create({
            body: message,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:${to}`
        });

        return res.status(200).json({
            message: "Message sent successfully."
        });
    } catch (error) {
        console.error('Error sending message:', error);

        res.status(400).json({
            message: "Message send failed.",
            error: error.message
        });
    }
};

module.exports = sendMessage;
