"use client";
import Link from "next/link";
import React from "react";

interface NextButtonProps {
  href: string;       
  className?: string; 
}

export const NextButton: React.FC<NextButtonProps> = ({ href, className = "" }) => {
  return (
    <Link href={href}>
      <button
        className={`bg-white hover:bg-gray-200 text-black  py-1 px-5 rounded  ${className}`}
      >
        Next
      </button>
    </Link>
  );
};
