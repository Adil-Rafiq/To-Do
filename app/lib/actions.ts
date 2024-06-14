'use server';

export async function createTask({
  userId,
  title,
  description,
}: {
  userId: string;
  title: string;
  description: string;
}) {
  try {
    const response = await fetch('http://localhost:3000/api/task/create', {
      method: 'POST',
      body: JSON.stringify({
        userId,
        title,
        description,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create task');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating task:', error);
    throw new Error('Failed to create task');
  }
}

export async function editTask(
  id: any,
  {
    title,
    description,
    status,
  }: { title: string; description: string; status: 'pending' | 'completed' }
) {
  try {
    const response = await fetch(`http://localhost:3000/api/task/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title,
        description,
        status,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update task');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating task:', error);
    throw new Error('Failed to update task');
  }
}

export async function deleteTask(id: any) {
  try {
    const response = await fetch(`http://localhost:3000/api/task/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }

    return;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw new Error('Failed to delete task');
  }
}
