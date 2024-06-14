'use client';

import { FaEdit, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { deleteTask, editTask } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { Task } from '@/app/lib/definitions';

export default function PendingTaskCard({ task }: { task: Task }) {
  const router = useRouter();

  const handleTaskCompletion = async (isChecked: boolean) => {
    const status = isChecked ? 'completed' : 'pending';

    try {
      await editTask(task?._id, {
        title: task?.title ?? '',
        description: task?.description ?? '',
        status,
      });

      router.push('/');
    } catch (error) {
      alert('An error occurred while updating the task');
    }
  };

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
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        id="task-1"
        className="appearance-none h-4 w-4 border border-black/30 cursor-pointer"
        onChange={e => {
          handleTaskCompletion(e.target.checked);
        }}
      />

      <Link href={`/tasks/${task?._id}`}>
        <label htmlFor="task-1" className="block cursor-pointer">
          <p className="text-lg font-bold">{task?.title}</p>
        </label>
      </Link>

      <div className="flex gap-4">
        <button
          className="flex items-center max-w-fit text-sm bg-transparent rounded-full hover:text-white hover:border-transparent transition-colors duration-300"
          onClick={() => router.push(`/tasks/${task?._id}/edit`)}
        >
          <FaEdit className="w-4 h-4" />
        </button>
        <button
          className="flex items-center max-w-fit text-sm bg-transparent rounded-full hover:text-white hover:border-transparent transition-colors duration-300"
          onClick={handleDelete}
        >
          <FaTrash className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
