import { CodeEditor } from "@/app/components/CodeTheam";
import { NextButton } from "@/app/components/NextPage";

export default function Page() {
  const body = `let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != val) {
            nums[k] = nums[i];
            k++  
        }
    }
    return k;`;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl  rounded-lg  p-6 mb-8 text-white">
        <h1 className="text-2xl font-bold mb-4">27. Remove Element</h1>
        <p className="text-gray-300">
          Given an integer array nums and an integer val, remove all occurrences
          of val in nums in-place. The order of the elements may be changed.
          Then return the number of elements in nums which are not equal to val.
          Consider the number of elements in nums which are not equal to val be
          k, to get accepted, you need to do the following things:
        </p>
      </div>

      <CodeEditor
        codeBody={body}
        wrapperStart="var removeElement = function(nums, val) {"
        wrapperEnd="};"
      />

      <div className="pt-20">
        <NextButton href="/client/arrays/RemoveDuplicatesfromArray" />
      </div>
    </div>
  );
}
