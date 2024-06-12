import React from 'react';
import { fetchTaskById } from '@/app/lib/data';

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const task = fetchTaskById(id);

  return <div>Edit task {id}</div>;
}
