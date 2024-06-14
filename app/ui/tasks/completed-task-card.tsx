'use client';

import { editTask } from '@/app/lib/actions';
import { Task } from '@/app/lib/definitions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

      router.push('/');
    } catch (error) {
      alert('An error occurred while updating the task');
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        id="task-1"
        className="appearance-none h-4 w-4 border border-black/30 cursor-pointer checked:bg-green-500 checked:border-transparent"
        defaultChecked
        onChange={e => {
          handleTaskCompletion(e.target.checked);
        }}
      />
      <Link href={`/tasks/${task?._id}`}>
        <label htmlFor="task-1" className="block cursor-pointer">
          <p className="text-lg font-bold line-through">{task?.title}</p>
        </label>
      </Link>
    </div>
  );
}
