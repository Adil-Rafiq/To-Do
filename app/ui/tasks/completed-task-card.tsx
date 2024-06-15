'use client';

import { FaEdit, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { editTask, deleteTask } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { Task } from '@/app/lib/definitions';

export default function CompletedTaskCard({ task }: { task: Task }) {
  const router = useRouter();

  const handleTaskCompletion = async (isChecked: boolean) => {
    const status = isChecked ? 'completed' : 'pending';

    try {
      await editTask(task?._id, {
        title: task?.title ?? '',
        description: task?.description ?? '',
        status,
      });

      router.replace('/');
    } catch (error) {
      alert('An error occurred while updating the task');
    }
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click from propagating to the card link
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (!confirmed) return;

    try {
      await deleteTask(task?._id);
      alert('Task deleted successfully');
      router.replace('/');
    } catch (error) {
      alert('An error occurred while deleting the task');
    }
  };

  return (
    <div className="relative flex gap-4 p-4 bg-secondary/5 rounded-lg shadow-md cursor-pointer hover:bg-secondary/10 transition-colors duration-300">
      <div className="flex items-center gap-4 w-full">
        <input
          type="checkbox"
          id={`task-${task?._id}`}
          className="appearance-none h-4 w-4 cursor-pointer checked:bg-highlight checked:border-transparent"
          defaultChecked
          onChange={e => {
            handleTaskCompletion(e.target.checked);
          }}
        />
        <Link href={`/tasks/${task?._id}`} className="flex-1">
          <label htmlFor={`task-${task?._id}`} className="block cursor-pointer">
            <p className="text-lg font-bold text-white line-through">
              {task?.title}
            </p>
            <p className="text-sm text-gray-400">{task?.description}</p>
          </label>
        </Link>

        <div className="flex gap-6 ml-auto">
          <button
            className="p-0 text-white border-0 hover:text-accent hover:!bg-transparent before:bg-transparent"
            onClick={e => {
              e.stopPropagation(); // Prevent the click from propagating to the card link
              router.push(`/tasks/${task?._id}/edit`);
            }}
          >
            <FaEdit className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            className="p-0 text-white border-0 hover:text-accent hover:!bg-transparent before:bg-transparent"
            onClick={handleDelete}
          >
            <FaTrash className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
