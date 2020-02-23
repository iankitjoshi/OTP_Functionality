const accountSid = 'AC977c03d573e4a98d52fe43aecd68a19f'
const authToken = '860407a34f3d907d90cd63e80cbc6553'
const client = require('twilio')(accountSid, authToken)

const smsTwilio = (req, res , next) => {
        const msg = req.body
        console.log('Message',msg)
            client.messages.create({
                from: '+15138170408',
                to : `+91${msg.mobile}`,
                body : msg.message
            })
            .then(message => console.log(`Message Sucessfully Send to ${message.to} The message is => ${message.body}. form number ${message.from} and message sent id is => ${message.sid} . Thank You..!!` ))
            .catch(err => console.log('Eroor',err))
            next()
}           

module.exports = smsTwilio