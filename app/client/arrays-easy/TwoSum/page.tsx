import { CodeEditor } from "@/app/components/CodeTheam";
import { NextButton } from "@/app/components/NextPage";

export default function Page() {
  const body = `for(let i=0; i<nums.length; i++) {
    for(let j=i+1; j<nums.length; j++) {
        if(nums[i] + nums[j] == target) {
            return [i, j]
        }
    }
}`;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl  rounded-lg  p-6 mb-8 text-white">
        <h1 className="text-2xl font-bold mb-4">1. Two Sum</h1>
        <p className="text-gray-300">
          Given an array of integers <code>nums</code> and an integer{" "}
          <code>target</code>, return indices of the two numbers such that they
          add up to <code>target</code>. You may assume that each input would
          have exactly one solution, and you may not use the same element twice.
          You can return the answer in any order.
        </p>
      </div>

      <CodeEditor
        codeBody={body}
        wrapperStart="var twoSum = function(nums, target) {"
        wrapperEnd="};"
      />

      <div className="pt-20 ">
        <NextButton href="/client/arrays/RemoveDuplicatesfromArray" />
        
      </div>
    </div>
  );
}
