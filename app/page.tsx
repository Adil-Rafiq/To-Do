import PendingTaskCard from '@/app/ui/tasks/pending-task-card';
import CompletedTaskCard from '@/app/ui/tasks/completed-task-card';
import CreateTask from '@/app/ui/tasks/create-task';
import { fetchAllTasks } from '@/app/lib/data';
import { Task } from './lib/definitions';

export default async function Home() {
  let tasks: Task[] = [];
  try {
    tasks = await fetchAllTasks();
  } catch (error) {
    console.error('Failed to fetch all tasks');
    return <div>Failed to fetch all tasks</div>;
  }

  return (
    <main className="space-y-20">
      {/* ----------------- All pending tasks ---------------------- */}
      <section>
        <h1 className="text-left text-2xl font-bold mb-5">Pending Tasks</h1>
        <div className="flex flex-col gap-3 items-center justify-between">
          {tasks.map((task: Task) => {
            if (task?.status === 'pending') {
              return <PendingTaskCard key={task?._id} task={task} />;
            }
          })}
        </div>
      </section>

      {/* ----------------- All completed tasks ---------------------- */}
      <section>
        <h1 className="text-left text-2xl font-bold mb-5">Completed Tasks</h1>
        <div className="flex flex-col gap-3 items-center justify-between">
          {tasks.map((task: Task) => {
            if (task?.status === 'completed') {
              return <CompletedTaskCard key={task?._id} task={task} />;
            }
          })}
        </div>
      </section>

      <section>
        <h1 className="text-left text-2xl font-bold mb-5">Create New Task</h1>
        <CreateTask />
      </section>
    </main>
  );
}
