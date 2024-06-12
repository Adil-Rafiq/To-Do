'use server';

import { connectToDB } from '@/utils/database.js';
import Task from '@/models/task.js';

export async function createTask(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  try {
    await connectToDB();

    const newTask = new Task({
      title,
      description,
      status: 'pending',
    });

    await newTask.save();

    return newTask;
  } catch (error) {
    console.error('Error creating task:', error);
    throw new Error('Failed to create task');
  }
}

export async function editTask(formData: FormData, id: string) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const status = formData.get('status') as 'pending' | 'completed';

  try {
    await connectToDB();

    const task = await Task.findById(id);

    if (!task) {
      throw new Error('Task not found');
    }

    task.title = title;
    task.description = description;
    task.status = status;

    await task.save();

    return task;
  } catch (error) {
    console.error('Error editing task:', error);
    throw new Error('Failed to edit task');
  }
}
