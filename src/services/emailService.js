import { emailTransporter } from "./transport.js";
import { userActivationUrlEMailTemplate } from "./emailTemplate.js";

export const userActivationUrlEmail = async (obj) => {
  try {
    const transporter = emailTransporter(); // ← call it as a function here

    const info = await transporter.sendMail(
      userActivationUrlEMailTemplate(obj),
    );

    console.log(info);
    return { status: "success", info };
  } catch (error) {
    console.error("Failed to send activation email:", error);
    return { status: "error", message: error.message };
  }
};
