import Link from 'next/link';

export default function TaskCard({
  id,
  title,
  description,
  status,
}: {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
}) {
  return (
    <div className="min-h-screen flex flex-col p-4 bg-white space-y-6">
      <h1 className="font-black text-3xl">Task Details</h1>

      <div className="space-y-2">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="bg-accent/15 p-4 rounded-lg">
          {description || 'No description'}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <div
          className={`w-3 h-3 rounded-full ${
            status === 'pending' ? 'bg-red-500' : 'bg-green-500'
          }`}
        ></div>
        <p>{status}</p>
      </div>

      <div className="flex gap-5 items-center mt-4">
        <Link href={`/tasks/${id}/edit`}>
          <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded">
            Edit
          </button>
        </Link>

        <button className="px-2 py-1 text-sm text-white bg-red-500 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}
