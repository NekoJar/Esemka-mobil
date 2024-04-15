import { z } from "zod";

export const bookingFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string(),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});
