import { CodeEditor } from "@/app/components/CodeTheam";
import { NextButton } from "@/app/components/NextPage";

export default function Page() {
  const body = `for(let i = digits.length - 1; i >= 0; i--) {
    if(digits[i] === 9) {
        digits[i] = 0
    }
    else {
        digits[i] += 1
        return digits
    }
  }
  return [1, ...digits]`;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl  rounded-lg  p-6 mb-8 text-white">
        <h1 className="text-2xl font-bold mb-4">66. Plus One</h1>
        <p className="text-gray-300">
          You are given a large integer represented as an integer array digits,
          where each digits[i] is the ith digit of the integer. The digits are
          ordered from most significant to least significant in left-to-right
          order. The large integer does not contain any leading 0&#39;s.
          Increment the large integer by one and return the resulting array of
          digits.
        </p>
      </div>

      <CodeEditor
        codeBody={body}
        wrapperStart="var plusOne = function(digits) {"
        wrapperEnd="};"
      />

      <div className="pt-20 ">
        <NextButton href="/client/arrays-easy/MergeSortedArray" />
      </div>
    </div>
  );
}
