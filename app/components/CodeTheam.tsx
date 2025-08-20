"use client";
import { TypingTest } from "./TypingTest";

interface CodeTheam {
  codeBody: string;
  wrapperStart?: string; 
  wrapperEnd?: string; 
}

export function CodeEditor({
  codeBody,
  wrapperStart = "",
  wrapperEnd = "",
}: CodeTheam) {
  return (
    <div className="w-max rounded-lg bg-black font-mono text-white shadow-lg overflow-hidden">
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span className="ml-auto text-gray-400 text-sm">index.js</span>{" "}
      </div>

      <div className="p-6">
        {wrapperStart && <pre className="text-white">{wrapperStart}</pre>}

        <div className="pl-6">
          <TypingTest code={codeBody} />
        </div>

        {wrapperEnd && <pre className="text-white">{wrapperEnd}</pre>}
      </div>
    </div>
  );
}
