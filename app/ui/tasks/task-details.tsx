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
    <div className="min-h-screen flex flex-col space-y-6">
      <h1 className="font-black text-accent text-3xl">Task Details</h1>

      <div className="space-y-2">
        <p className="text-xl font-semibold">{task?.title}</p>
        <p className="bg-accent/15 p-4 rounded-lg min-h-32 max-w-md">
          {task?.description || 'No description'}
        </p>
      </div>

      <div className="flex justify-items-center items-center space-x-2">
        <p
          className={`text-black p-2 italic rounded-md ${
            task?.status === 'pending' ? 'bg-error' : 'bg-highlight'
          }`}
        >
          {task?.status}
        </p>
      </div>

      <div className="flex gap-5 items-center mt-4">
        <Link href={`/tasks/${task?._id}/edit`}>
          <button>Edit</button>
        </Link>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
