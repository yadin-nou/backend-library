export const userActivationUrlEMailTemplate = ({ email, name, url }) => {
  const obj = {
    from: `"Local Library" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Acction Required- Activate your new account",
    text: `Hello ${name} follow the link to activate your account.`,
    html: `<p>Your account has been reated. Click the button below to activate your account.</p>
            <br/>
            <br/>
            <a href="${url}">
            <button style="background:green; color:white;padding:2rem">Activate Now</button></a>
            <br/>
            <br/>

            Regards,
            </br>
             Library Administrator
            `,
  };
  return obj;
};
export const userAccountActivatedNotificationTem = ({ email, name, url }) => {
  const obj = {
    from: `"Local Library" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Great News! Activate your new account",
    text: `Hello ${name} , your account has been activated.`,
    html: `<p>Your account has been activated. Click here to login.</p>
            <br/>
            <br/>
            <a href="${url}">
            <button style="background:green; color:white;padding:2rem">Login Now</button></a>
            <br/>
            <br/>

            Regards,
            </br>
            Library Administrator
            `,
  };

  return obj;
};
export const sendUserOTPCodeTemplate = ({ email, name, otp }) => {
  const obj = {
    from: `"Local Library" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Reset Password OTP Code",
    text: `Hello ${name} , your OTP code is below.`,
    html: `
      Hello ${name} , <br/>.
      <p>Your OTP code is below will be expired in 5 minutes. <br/> </p>
    <p>Please copy it to create a new password.</p>
            <br/><Strong>
            ${otp}
            </Strong>
            <br/>

            <br/>
            <br/>

            Regards,
            </br>
            Library Administrator
            `,
  };

  return obj;
};
