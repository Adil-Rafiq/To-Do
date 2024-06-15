import PendingTaskCard from '@/app/ui/tasks/pending-task-card';
import CompletedTaskCard from '@/app/ui/tasks/completed-task-card';
import { fetchAllTasks } from '@/app/lib/data';
import { Task } from './lib/definitions';
import Link from 'next/link';

export default async function Home() {
  let tasks: Task[] = [];
  try {
    tasks = await fetchAllTasks();
  } catch (error) {
    console.error('Failed to fetch all tasks');
    return <div>Failed to fetch all tasks</div>;
  }

  const pendingTasks = tasks.filter((task: Task) => task?.status === 'pending');
  const completedTasks = tasks.filter(
    (task: Task) => task?.status === 'completed'
  );

  return (
    <main className="space-y-10 md:space-y-20">
      {/* ----------------- All pending tasks ---------------------- */}
      <section>
        <h1 className="text-left text-2xl text-primary font-bold mb-5">
          Pending Tasks
        </h1>
        <div className="flex flex-col gap-3">
          {pendingTasks.length > 0 ? (
            pendingTasks.map((task: Task) => (
              <PendingTaskCard key={task?._id} task={task} />
            ))
          ) : (
            <p className="text-center text-gray-500">No pending tasks</p>
          )}
        </div>
      </section>

      {/* ----------------- All completed tasks ---------------------- */}
      <section>
        <h1 className="text-left text-2xl text-primary font-bold mb-5">
          Completed Tasks
        </h1>
        <div className="flex flex-col gap-3">
          {completedTasks.length > 0 ? (
            completedTasks.map((task: Task) => (
              <CompletedTaskCard key={task?._id} task={task} />
            ))
          ) : (
            <p className="text-center text-gray-500">No completed tasks</p>
          )}
        </div>
      </section>

      <Link href="/tasks/create">
        <button className="mt-20">Create Task</button>
      </Link>
    </main>
  );
}
