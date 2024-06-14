import { connectToDB } from '@/utils/database';
import Task from '@/models/Task';

// api for creating a new task
export const POST = async (req: Request) => {
  const { userId, title, description } = await req.json();

  try {
    await connectToDB();

    const newTask = new Task({
      creator: userId,
      title,
      description,
    });

    await newTask.save();

    return new Response(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new task', {
      status: 500,
    });
  }
};
