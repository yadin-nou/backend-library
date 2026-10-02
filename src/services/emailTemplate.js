export const userActivationUrlEMailTemplate = ({ email, name, url }) => {
  const obj = {
    from: `"Local Library" <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: "Acction Required- Activate your new account",
    text: `Hello ${name} follow the link to activate your account.`,
    html: `<p>Your account has been reated. Click the button below to activate your account.</p>
            <br/>
            <br/>
            <a href=${url}>
            <button style="background:green; color:white;padding:2rem">Activate Now</button></a>
            <br/>
            <br/>

            Regards,
            </br>
            Yadin
            `,
  };
  return obj;
};
