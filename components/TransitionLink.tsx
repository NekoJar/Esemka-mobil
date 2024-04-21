"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  label?: string;
  children?: ReactNode;
  className?: string;
}

const TransitionLink = ({ href, label, children, className }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button className={cn("", className)} onClick={handleClick}>
      {label}
      {children}
    </button>
  );
};

export default TransitionLink;
