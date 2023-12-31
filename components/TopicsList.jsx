import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const getTopics = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error fetching topics", error);
  }
};

export default async function TopicsList() {
  const topics = await getTopics();

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveButton id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <PencilSquareIcon className="w-6 text-yellow-600" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
