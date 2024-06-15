'use client';

import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { editTask } from '@/app/lib/actions';
import { Task } from '@/app/lib/definitions';
import { useRouter } from 'next/navigation';

export default function EditTask({ task }: { task: Task }) {
  const [title, setTitle] = useState(task?.title ?? '');
  const [description, setDescription] = useState(task?.description ?? '');
  const [status, setStatus] = useState<'pending' | 'completed'>(
    task?.status ?? 'pending'
  );
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await editTask(task?._id, {
        title,
        description,
        status,
      });
      alert('Task updated successfully');
      router.push('/');
    } catch (error) {
      alert('An error occurred while updating the task');
    }
  };

  return (
    <div className="min-h-screen flex flex-col space-y-6">
      <h1 className="font-black text-accent text-3xl">Edit Task</h1>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="text-xl font-semibold bg-accent/15 w-full border-0 border-black/30 p-2 rounded-lg outline-none"
          placeholder="Title of the task..."
          required
        />

        <textarea
          id="description"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full border-0 bg-accent/15 p-3 rounded-lg outline-none"
          rows={5}
          placeholder="Description of the task..."
        ></textarea>

        <select
          name="status"
          id="status"
          value={status}
          onChange={e => setStatus(e.target.value as 'pending' | 'completed')}
          className="w-1/2 border-0 bg-accent/15 p-2 rounded-lg outline-none"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button type="submit" className="flex items-center gap-3 !mt-5">
          <FaSave className="w-5 h-5" />
          Save
        </button>
      </form>
    </div>
  );
}
