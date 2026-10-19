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
      Hello ${name} , <br/>
      <p>Your OTP code is below will be expired in 5 minutes. <br/> </p>
    <p>Please copy it to create a new password.</p>
            <br/><Strong>
            ${otp}
            </Strong>
            <br/>

            <br/>
            <br/>

            Regards,
            <br/>
            Library Administrator
            `,
  };

  return obj;
};
export const sendUserEmailNotificationUpdatePasswordTempalte = ({
  email,
  name,
}) => {
  const obj = {
    from: `"Local Library" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Great News, Password Updated",
    text: `Hello ${name} , your paassword has been updated successfully!`,
    html: `
      Hello ${name} , <br/>
      <p>Your password has been updated successfully, . <br/> </p>
    <p>You can login with a new password.</p>
          
            <br/>
            <br/>

            Regards,
            <br/>
            Library Administrator
            `,
  };

  return obj;
};
export const sendUserEmailNotificationBorrowTemplate = ({
  email,
  name,
  book,
}) => {
  const rows = book
    .map(
      (b, i) => `
      <tr>
        <td style="padding:8px;border:1px solid #ddd;">${i + 1}</td>
        <td style="padding:8px;border:1px solid #ddd;">
          <img src="${b.thumbnail}" alt="${b.bookTitle}" width="60" />
        </td>
        <td style="padding:8px;border:1px solid #ddd;">${b.bookTitle}</td>
        <td style="padding:8px;border:1px solid #ddd;">
          ${new Date(b.dueDate).toLocaleDateString("en-AU", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </td>
      </tr>`,
    )
    .join("");
  const obj = {
    from: `"Local Library" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Borrow Book",
    text: `Hello ${name} , You have successfully borrowed ${book.length} book (s).`,
    html: `
      Hello ${name} , <br/>
      <p>You have successfully borrowed ${book.length} books. <br/> </p>
    <p>Please see borrow book details below:</p>
        <p>You must return all books before or on the Return Date:</p>
           <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Book Image</th>
                <th>Book Title</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
             
            </tbody>
            </table>
            <br/>
            <br/>

            Regards,
            <br/>
            Library Administrator
            `,
  };

  return obj;
};
