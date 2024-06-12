import React from 'react';
import { fetchTaskById } from '@/app/lib/data';
import { Task } from '@/app/lib/definitions';
import TaskCard from '@/app/ui/tasks/task-details';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const task: Task = await fetchTaskById(id);

  return (
    <TaskCard
      id={task._id.toString()}
      title={task.title}
      description={task.description}
      status={task.status}
    />
  );
}
