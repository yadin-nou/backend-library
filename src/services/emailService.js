import { emailTransporter } from "./transport.js";
import {
  sendUserEmailNotificationBorrowTemplate,
  sendUserEmailNotificationReturnTemplate,
  sendUserEmailNotificationUpdatePasswordTempalte,
  sendUserOTPCodeTemplate,
  userAccountActivatedNotificationTem,
  userActivationUrlEMailTemplate,
} from "./emailTemplate.js";

export const userActivationUrlEmail = async (obj) => {
  try {
    const transporter = emailTransporter(); // ← call it as a function here

    const info = await transporter.sendMail(
      userActivationUrlEMailTemplate(obj),
    );

    //console.log(info);
    return { status: "success", info };
  } catch (error) {
    console.error("Failed to send activation email:", error);
    return { status: "error", message: error.message };
  }
};

export const userAccountActivatedNotificationEmail = async (obj) => {
  try {
    const transporter = emailTransporter(); // ← call it as a function here

    const info = await transporter.sendMail(
      userAccountActivatedNotificationTem(obj),
    );

    //console.log(info);
    return { status: "success", info };
  } catch (error) {
    console.error("Failed to send notification email:", error);
    return { status: "error", message: error.message };
  }
};
export const sendUserOTPCodeService = async (obj) => {
  try {
    const transporter = emailTransporter(); // ← call it as a function here

    const info = await transporter.sendMail(sendUserOTPCodeTemplate(obj));

    //console.log(info);
    return { status: "success", info };
  } catch (error) {
    console.error("Failed to send OTP email:", error);
    return { status: "error", message: error.message };
  }
};
export const sendUserEmailNotificationUpdatePasswordService = async (obj) => {
  try {
    const transporter = emailTransporter(); // ← call it as a function here

    const info = await transporter.sendMail(
      sendUserEmailNotificationUpdatePasswordTempalte(obj),
    );

    //console.log(info);
    return { status: "success", info };
  } catch (error) {
    console.error("Failed to update password:", error);
    return { status: "error", message: error.message };
  }
};

export const sendUserEmailNotificationBorrowService = async (obj) => {
  try {
    const transporter = emailTransporter(); // ← call it as a function here

    const info = await transporter.sendMail(
      sendUserEmailNotificationBorrowTemplate(obj),
    );

    //console.log(info);
    return { status: "success", info };
  } catch (error) {
    console.error("Failed to update password:", error);
    return { status: "error", message: error.message };
  }
};

export const sendUserEmailNotificationReturnService = async (obj) => {
  try {
    const transporter = emailTransporter(); // ← call it as a function here

    const info = await transporter.sendMail(
      sendUserEmailNotificationReturnTemplate(obj),
    );

    //console.log(info);
    return { status: "success", info };
  } catch (error) {
    console.error("Failed to update password:", error);
    return { status: "error", message: error.message };
  }
};
