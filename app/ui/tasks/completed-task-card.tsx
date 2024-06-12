import Link from 'next/link';

export default function CompletedTaskCard({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        id="task-1"
        className="appearance-none h-4 w-4 border border-black/30 cursor-pointer checked:bg-green-500 checked:border-transparent"
        defaultChecked
      />
      <Link href={`/tasks/${id}`}>
        <label htmlFor="task-1" className="block cursor-pointer">
          <p className="text-lg font-bold line-through">{title}</p>
        </label>
      </Link>
    </div>
  );
}
