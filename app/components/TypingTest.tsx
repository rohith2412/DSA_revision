"use client";
import { useState, useEffect } from "react";

interface TypingTestProps {
  code: string; 
}

export function TypingTest({ code }: TypingTestProps) {
  const [input, setInput] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key.length === 1) {
      setInput((prev) => prev + e.key);
      setCurrentIndex((prev) => prev + 1);
    } else if (e.key === "Enter") {
      e.preventDefault(); 
      setInput((prev) => prev + "\n");
      setCurrentIndex((prev) => prev + 1);
    } else if (e.key === "Tab") {
      e.preventDefault(); 
      const tabSpaces = "  "; 
      setInput((prev) => prev + tabSpaces);
      setCurrentIndex((prev) => prev + tabSpaces.length);
    } else if (e.key === "Backspace" && currentIndex > 0) {
      setInput((prev) => prev.slice(0, -1));
      setCurrentIndex((prev) => prev - 1);
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [currentIndex]);


  return (
    <div className="p-4 font-mono  text-gray-500 rounded-xl overflow-x-auto">
      <div className="text-lg leading-7 whitespace-pre-wrap">
        {code.split("").map((char, i) => {
          let color = "";
          if (i < input.length) {
            color = input[i] === char ? "text-white" : "text-red-500";
          }
          const cursor = i === currentIndex ? "bg-white text-black" : "";

          return (
            <span
              key={i}
              className={`${color} ${cursor} px-[1px] rounded-sm`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
