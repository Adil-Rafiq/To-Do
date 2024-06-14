import React from 'react';
import { fetchTaskById } from '@/app/lib/data';
import { Task } from '@/app/lib/definitions';
import EditTask from '@/app/ui/tasks/edit-task';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  let task: Task | null = null;

  try {
    task = await fetchTaskById(id);
  } catch (error) {
    console.error('Error fetching task:', error);
    return <div>Error fetching task</div>;
  }

  return (
    <div className="min-h-screen flex flex-col p-4 bg-white space-y-6">
      <EditTask task={task} />
    </div>
  );
}
