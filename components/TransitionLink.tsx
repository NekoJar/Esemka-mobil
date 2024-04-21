"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";
import { ReactNode } from "react";

interface Props {
  href: string;
  label: string;
  children?: ReactNode;
}

const TransitionLink = ({ href, label, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button className="" onClick={handleClick}>
      {label}
      {children}
    </button>
  );
};

export default TransitionLink;
