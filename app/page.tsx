import TaskCard from '@/app/ui/tasks/task-details';
import PendingTaskCard from '@/app/ui/tasks/pending-task-card';
import CompletedTaskCard from '@/app/ui/tasks/completed-task-card';
import NewTask from '@/app/ui/tasks/create-task';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PendingTaskCard />
    </main>
  );
}
