"use client";
import ReactLenis from "@studio-freight/react-lenis";
import React, { ReactNode } from "react";

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};
