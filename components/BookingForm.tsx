import { send } from "@/app/api/send/sendEmail";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitButton } from "./ui/SubmitButton";
import { useForm } from "react-hook-form";
import { bookingFormSchema } from "@/lib/schema";
import { z } from "zod";
import { Button } from "./ui/button";

export const BookingForm = () => {
  return (
    <form className="mt-4 sm:mt-0 flex flex-col" action={send}>
      <div className="border-b-[1px] space-y-4 pb-4 mb-4">
        <p className=" text-lg text-white/70">Colour</p>
        <Button variant="outlineNoBg" className="bg-zinc-900/50" disabled>
          <p className="flex items-center text-white lowercase gap-4">
            <span className="p-2 bg-white rounded-full border-none"></span>
            White
          </p>
        </Button>
      </div>
      <div className="mb-6 items-center grid grid-cols-2">
        <label
          htmlFor="email"
          className="text-white block  text-sm font-medium"
        >
          Email
        </label>
        <input
          className="bg-transparent border placeholder-white/50 text-sm rounded-xl block w-full p-2.5 transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
      </div>
      <div className="mb-6 items-center grid grid-cols-2">
        <label htmlFor="name" className="text-white block  text-sm font-medium">
          Name
        </label>
        <input
          className="bg-transparent border placeholder-white/50 text-sm rounded-xl block w-full p-2.5 transition-all"
          name="senderName"
          type="text"
          required
          maxLength={500}
          placeholder="Your Name"
        />
      </div>
      <div className="mb-6 items-center grid grid-cols-2">
        <label
          htmlFor="Address"
          className="text-white block text-sm font-medium"
        >
          Address
        </label>
        <input
          className="bg-transparent border placeholder-white/50 text-sm rounded-xl block w-full p-2.5 transition-all"
          name="senderAddress"
          type="text"
          required
          maxLength={500}
          placeholder="Your address"
        />
      </div>
      <div className="mb-6 items-center grid grid-cols-2">
        <label htmlFor="date" className="text-white block  text-sm font-medium">
          Date
        </label>
        <input
          className="bg-transparent border text-white text-sm rounded-xl block w-full p-2.5 transition-all"
          name="senderDate"
          type="datetime-local"
          required
          maxLength={500}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="messages"
          className="text-white block text-sm mb-2 font-medium"
        >
          Note
        </label>
        <textarea
          className="h-20 bg-transparent border placeholder-white/50 text-white text-sm rounded-xl block w-full p-2.5 transition-all"
          name="message"
          placeholder="Add note"
          maxLength={5000}
        />
      </div>
      <SubmitButton>
        <span className="text-zinc-700">Book Now</span>
      </SubmitButton>
    </form>
  );
};
