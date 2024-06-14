import React from 'react';
import { fetchTaskById } from '@/app/lib/data';
import { Task } from '@/app/lib/definitions';
import TaskCard from '@/app/ui/tasks/task-details';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  let task: Task = null;

  try {
    task = await fetchTaskById(id);
  } catch (error) {
    console.error('Failed to fetch task');
    return <div>Failed to fetch task</div>;
  }

  return <TaskCard task={task} />;
}
