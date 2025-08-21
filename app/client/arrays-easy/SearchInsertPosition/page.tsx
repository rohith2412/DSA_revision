import { CodeEditor } from "@/app/components/CodeTheam";
import { NextButton } from "@/app/components/NextPage";

export default function Page() {
  const body = `for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] > target) {
            return i;
        }
    }
    return nums.length;`;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl  rounded-lg  p-6 mb-8 text-white">
        <h1 className="text-2xl font-bold mb-4">35. Search Insert Position</h1>
        <p className="text-gray-300">
          Given a sorted array of distinct integers and a target value, return
          the index if the target is found. If not, return the index where it
          would be if it were inserted in order. You must write an algorithm
          with O(log n) runtime complexity.
          
        </p>
      </div>

      <CodeEditor
        codeBody={body}
        wrapperStart=" var searchInsert = function(nums, target) {"
        wrapperEnd="};"
      />

      <div className="pt-20">
        <NextButton href="/client/arrays/RemoveDuplicatesfromArray" />
      </div>
    </div>
  );
}
