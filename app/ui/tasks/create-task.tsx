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
    <div className="flex flex-col gap-3 max-w-screen-sm">
      <input
        className="border rounded-md border-gray-300 p-2"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="border rounded-md border-gray-300 p-2"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button
        className="flex items-center max-w-fit border border-black px-4 py-2 text-sm bg-transparent rounded-full hover:bg-accent hover:text-white hover:border-transparent transition-colors duration-300"
        onClick={handleSave}
        disabled={loading}
      >
        <FaSave className="mr-2" />
        {loading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}
