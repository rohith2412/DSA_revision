import { CodeEditor } from "@/app/components/CodeTheam";
import { NextButton } from "@/app/components/NextPage";

export default function Page() {
  const body = `for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);`;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl  rounded-lg  p-6 mb-8 text-white">
        <h1 className="text-2xl font-bold mb-4">88. Merge Sorted Array</h1>
        <p className="text-gray-300">
          You are given two integer arrays nums1 and nums2, sorted in
          non-decreasing order, and two integers m and n, representing the
          number of elements in nums1 and nums2 respectively. Merge nums1 and
          nums2 into a single array sorted in non-decreasing order. The final
          sorted array should not be returned by the function, but instead be
          stored inside the array nums1. To accommodate this, nums1 has a length
          of m + n, where the first m elements denote the elements that should
          be merged, and the last n elements are set to 0 and should be ignored.
          nums2 has a length of n.
        </p>
      </div>

      <CodeEditor
        codeBody={body}
        wrapperStart="var merge = function(nums1, m, nums2, n) {"
        wrapperEnd="};"
      />

      <div className="pt-20 ">
        <NextButton href="/client/arrays-easy/BuildArrayfromPermutation" />
      </div>
    </div>
  );
}
