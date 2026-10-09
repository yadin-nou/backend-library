import { emailTransporter } from "./transport.js";
import {
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
    console.error("Failed to send activation email:", error);
    return { status: "error", message: error.message };
  }
};
