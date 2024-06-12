import TaskCard from '@/app/ui/tasks/task-details';
import PendingTaskCard from '@/app/ui/tasks/pending-task-card';
import CompletedTaskCard from '@/app/ui/tasks/completed-task-card';
import NewTask from '@/app/ui/tasks/create-task';
import { fetchTasks } from '@/app/lib/data';
import { Task } from './lib/definitions';

export default async function Home() {
  const tasks: Task[] = await fetchTasks();

  return (
    <main className="space-y-20">
      <section>
        <h1 className="text-left text-2xl font-bold mb-5">Pending Tasks</h1>
        <div className="flex flex-col gap-3 items-center justify-between">
          {tasks.map((task: Task) => {
            if (task.status === 'pending') {
              return (
                <PendingTaskCard id={task._id.toString()} title={task.title} />
              );
            }
          })}
        </div>
      </section>

      <section>
        <h1 className="text-left text-2xl font-bold mb-5">Completed Tasks</h1>
        <div className="flex flex-col gap-3 items-center justify-between">
          {tasks.map((task: Task) => {
            if (task.status === 'completed') {
              return (
                <CompletedTaskCard
                  id={task._id.toString()}
                  title={task.title}
                />
              );
            }
          })}
        </div>
      </section>

      <section>
        <h1 className="text-left text-2xl font-bold mb-5">Create New Task</h1>
        <NewTask />
      </section>
    </main>
  );
}
