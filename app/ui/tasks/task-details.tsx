'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { deleteTask } from '@/app/lib/actions';
import { Task } from '@/app/lib/definitions';

export default function TaskCard({ task }: { task: Task }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (!confirmed) return;

    try {
      await deleteTask(task?._id);
      alert('Task deleted successfully');
      router.push('/');
    } catch (error) {
      alert('An error occurred while deleting the task');
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4 bg-white space-y-6">
      <h1 className="font-black text-3xl">Task Details</h1>

      <div className="space-y-2">
        <p className="text-3xl font-semibold">{task?.title}</p>
        <p className="bg-accent/15 p-4 rounded-lg">
          {task?.description || 'No description'}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <div
          className={`w-3 h-3 rounded-full ${
            task?.status === 'pending' ? 'bg-red-500' : 'bg-green-500'
          }`}
        ></div>
        <p>{task?.status}</p>
      </div>

      <div className="flex gap-5 items-center mt-4">
        <Link href={`/tasks/${task?._id}/edit`}>
          <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded">
            Edit
          </button>
        </Link>

        <button
          className="px-2 py-1 text-sm text-white bg-red-500 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
