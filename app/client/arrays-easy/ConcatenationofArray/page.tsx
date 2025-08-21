import { CodeEditor } from "@/app/components/CodeTheam";
import { NextButton } from "@/app/components/NextPage";

export default function Page() {
  const body = `return [...nums,...nums]`;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl  rounded-lg  p-6 mb-8 text-white">
        <h1 className="text-2xl font-bold mb-4">
          1929. Concatenation of Array
        </h1>
        <p className="text-gray-300">
          Given an integer array nums of length n, you want to create an array
          ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for
          0 &lt;= i &lt; n (0-indexed).
          <br />
          <br />
          Specifically, ans is the concatenation of two nums arrays.
          <br />
          <br />
          Return the array ans.
        </p>
      </div>

      <CodeEditor
        codeBody={body}
        wrapperStart="var getConcatenation = function(nums) {"
        wrapperEnd="};"
      />

      <div className="pt-20 ">
        <NextButton href="/client/arrays-easy/" />
      </div>
    </div>
  );
}
