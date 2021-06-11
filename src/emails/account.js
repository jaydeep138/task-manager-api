const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'developerjaydeep2024@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app,${name}. Let me know how you et along with the app`
    })
}

const sendDeleteEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'developerjaydeep2024@gmail.com',
        subject:'Well See you again!',
        text:`Good bye,${name}.It was nice to be with you :) `
    })
}
module.exports={
    sendWelcomeEmail,
    sendDeleteEmail
}