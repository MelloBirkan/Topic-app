"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function RemoveButton(props) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${props.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic}>
      <TrashIcon className="w-6 text-red-800" />
    </button>
  );
}
