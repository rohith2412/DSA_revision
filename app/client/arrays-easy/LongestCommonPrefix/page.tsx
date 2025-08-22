/* eslint-disable react/no-unescaped-entities */
import { CodeEditor } from "@/app/components/CodeTheam";
import { NextButton } from "@/app/components/NextPage";

export default function Page() {
  const body = `strs.sort();
    let firstword = strs[0]
    let lastword = strs[strs.length - 1];
    let prefix = "";

    for(let i = 0; i < firstword.length; i++) {
        if(firstword[i] === lastword[i]) {
            prefix += firstword[i]
        } else {
            break;
        }
    }
    return prefix;`;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl  rounded-lg  p-6 mb-8 text-white">
        <div className="flex justify-between items-center pb-10">
          <h1 className="text-2xl font-bold mb-4">14. Longest Common Prefix</h1>
          <div className="">
            <NextButton href="/client/arrays-easy/BuildArrayfromPermutation" />
          </div>
        </div>
        <p className="text-gray-300">
          Write a function to find the longest common prefix string amongst an
          array of strings. If there is no common prefix, return an empty string
          "".
        </p>
      </div>

      <CodeEditor
        codeBody={body}
        wrapperStart="var longestCommonPrefix = function(strs) {"
        wrapperEnd="};"
      />
    </div>
  );
}
