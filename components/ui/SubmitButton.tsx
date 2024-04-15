"use client";
import React, { ReactNode } from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="outline"
      disabled={pending}
      className={pending ? "bg-transparent" : ""}
    >
      {pending ? (
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};
