// all data fetching functions
import { unstable_noStore as noStore } from 'next/cache';
import { connectToDB } from '@/utils/database';
import Task from '@/models/task';

export async function fetchTasks() {
  noStore();

  try {
    await connectToDB();
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error('Failed to fetch all tasks.');
  }
}

export async function fetchTaskById(id: string) {
  noStore();

  try {
    await connectToDB();
    const task = await Task.findById(id);
    console.log(task);
    return task;
  } catch (error) {
    throw new Error('Failed to fetch task by id.');
  }
}
