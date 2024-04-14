import { Button, Html, Tailwind } from "@react-email/components";
import * as React from "react";

interface EmailFormProps {
  message: string;
  senderEmail: string;
}

export default function EmailForm({ message, senderEmail }: EmailFormProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Button
        href="https://example.com"
        className="p-6 bg-black rounded-full text-white font-extralight"
      >
        Click me
      </Button>
    </Tailwind>
  );
}
