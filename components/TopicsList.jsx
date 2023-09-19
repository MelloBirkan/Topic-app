import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { PencilSquareIcon } from "@heroicons/react/24/solid"

export default function TopicsList() {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>

        <div className="flex gap-2">
          <RemoveButton />
          <Link href="./editTopic/123" >
            <PencilSquareIcon className="w-6 text-yellow-600" />
          </Link>
        </div>
      </div>
    </>
  )

}