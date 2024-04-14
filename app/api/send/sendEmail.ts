"use server";

import React from "react";
import { Resend } from "resend";
import { renderAsync } from "@react-email/render";
import { validateString, getErrorMessage } from "@/lib/utils";
import EmailForm from "@/emails/EmailForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const subject = formData.get("subject");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "jarrworkspace@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(EmailForm, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
