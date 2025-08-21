import { CodeEditor } from "@/app/components/CodeTheam";
import { NextButton } from "@/app/components/NextPage";

export default function Page() {
  const body = `let i = 0
  for(let j = 0; j < nums.length; j++) {
      if(nums[i] != nums[j])
      nums[++i] = nums[j]
  }
  return ++i`;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl  rounded-lg  p-6 mb-8 text-white">
        <h1 className="text-2xl font-bold mb-4">
          26. Remove Duplicates from Sorted Array
        </h1>
        <p className="text-gray-300">
          Given an integer array nums sorted in non-decreasing order, remove the
          duplicates in-place such that each unique element appears only once.
          The relative order of the elements should be kept the same. Then
          return the number of unique elements in nums. Consider the number of
          unique elements of nums to be k, to get accepted, you need to do the
          following things: <br />
          <br />
          <span className="flex gap-10">
            <span>Input: nums = [0,0,1,1,1,2,2,3,3,4] </span>
            <span>Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]</span>
          </span>
        </p>
      </div>

      <CodeEditor
        codeBody={body}
        wrapperStart=" var removeDuplicates = function(nums) {"
        wrapperEnd="};"
      />

      <div className="pt-20">
        <NextButton href="/client/arrays-easy/RemoveElement" />
      </div>
    </div>
  );
}
