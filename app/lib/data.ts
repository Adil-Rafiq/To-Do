// all data fetching functions
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchAllTasks() {
  // noStore();
  try {
    const response = await fetch('http://localhost:3000/api/task', {
      cache: 'no-cache',
    });
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    throw new Error('Failed to fetch all tasks.');
  }
}

export async function fetchTaskById(id: string) {
  noStore();

  try {
    const response = await fetch(`http://localhost:3000/api/task/${id}`);
    const task = await response.json();
    return task;
  } catch (error) {
    throw new Error('Failed to fetch task.');
  }
}
