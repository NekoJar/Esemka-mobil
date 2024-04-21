"use server";

import React from "react";
import { Resend } from "resend";
import { renderAsync } from "@react-email/render";
import { validateString, getErrorMessage } from "@/lib/utils";
import EmailForm from "@/emails/EmailForm";
import { toast } from "sonner";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const productName = formData.get("productName") as string;
  const colorProduct = formData.get("colorProduct") as string;
  const senderName = formData.get("senderName") as string;
  const senderEmail = formData.get("senderEmail");
  const senderaddress = formData.get("senderAddress") as string;
  const senderDate = formData.get("senderDate") as string;
  const message = formData.get("message") as string;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Esemka Booking Form <onboarding@resend.dev>",
      to: "jarrworkspace@gmail.com",
      subject: "Esemka Booking Form",
      reply_to: senderEmail,
      react: React.createElement(EmailForm, {
        message: message,
        senderEmail: senderEmail,
        senderName: senderName,
        senderAddress: senderaddress,
        senderDate: senderDate,
        productName: productName,
        colorProduct: colorProduct,
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

export const send = async (formData: FormData) => {
  try {
    const { data, error } = await sendEmail(formData);

    if (error) {
      // Handle error case
      console.error("Error:", error);
      return { success: false, error };
    } else {
      // Form submission successful

      return { success: true };
    }
  } catch (error) {
    // Handle other errors
    console.error("Error:", error);
    return {
      success: false,
      error: "An error occurred while processing your request.",
    };
  }
};
