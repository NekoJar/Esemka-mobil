import { send } from "@/app/api/send/sendEmail";
import React, { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitButton } from "./ui/SubmitButton";
import { useForm } from "react-hook-form";
import { bookingFormSchema } from "@/lib/schema";
import { z } from "zod";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";
import { dateFormatter } from "@/lib/dateFormatter";

export const BookingForm = ({ title }: { title: string }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitClient = async (formData: FormData) => {
    const response = await send(formData);
    if (response) {
      toast.success("Booking sent!", {
        description:
          "Booking in progress. Stay tuned for upcoming details regarding your booking.",
      });
      //@ts-ignore
      formRef.current.reset();
    } else {
      // fail
      toast.error("error");
    }
  };

  return (
    <form
      className="mt-4 sm:mt-0 flex flex-col"
      action={handleSubmitClient}
      ref={formRef}
    >
      <div className="border-b-[1px] space-y-4 pb-4 mb-6">
        <input name="productName" value={title} hidden />
        <p className=" text-lg text-white/70">Colour</p>
        <Button
          variant="outlineNoBg"
          className="bg-zinc-900/50"
          disabled
          name="carColour"
        >
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
