'use client';

import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { createTask } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import mongoose from 'mongoose';

export default function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    setLoading(true);
    const userId = new mongoose.Types.ObjectId().toHexString(); // will be replaced with actual user ID

    try {
      await createTask({ userId, title, description });
      setTitle('');
      setDescription('');
      router.push('/');
    } catch (error) {
      console.error('Error creating task:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col space-y-6">
      <h1 className="font-black text-accent text-3xl">Create Task</h1>
      <input
        className="text-xl font-semibold bg-accent/15 w-full border-0 border-black/30 p-2 rounded-lg outline-none"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="text-xl font-semibold bg-accent/15 w-full border-0 border-black/30 p-2 rounded-lg outline-none"
        placeholder="Description"
        value={description}
        rows={5}
        onChange={e => setDescription(e.target.value)}
      />
      <button
        className="flex items-center max-w-fit !mt-5"
        onClick={handleSave}
        disabled={loading}
      >
        <FaSave className="mr-2" />
        {loading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}
