import { CodeEditor } from "@/app/components/CodeTheam";
import { NextButton } from "@/app/components/NextPage";

export default function Page() {
  const body = `return nums.map(i => nums[i])
`;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl  rounded-lg  p-6 mb-8 text-white">
        <h1 className="text-2xl font-bold mb-4">1920. Build Array from Permutation</h1>
        <p className="text-gray-300">
          Given a zero-based permutation nums (0-indexed), build an array ans of
          the same length where ans[i] = nums[nums[i]] for each 0 &lt;= i &lt;
          nums.length and return it. A zero-based permutation nums is an array
          of distinct integers from 0 to nums.length - 1 (inclusive).
        </p>
      </div>

      <CodeEditor
        codeBody={body}
        wrapperStart="var buildArray = function(nums) {"
        wrapperEnd="};"
      />

      <div className="pt-20 ">
        <NextButton href="/client/arrays-easy/ConcatenationofArray" />
      </div>
    </div>
  );
}
