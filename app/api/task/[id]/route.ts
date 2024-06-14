import { connectToDB } from '@/utils/database';
import Task from '@/models/Task';

// api for getting a task by id
export const GET = async (req: Request, context: any) => {
  const { params } = context;
  const id = params.id;

  try {
    await connectToDB();

    // const task = await Task.findById(id).populate('creator'); // the creator field will be populated with the user object
    const task = await Task.findById(id);

    if (!task) {
      return new Response('Task not found', { status: 404 });
    }

    return new Response(JSON.stringify(task), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch the task', { status: 500 });
  }
};

// api for updating a task by id
export const PATCH = async (req: Request, context: any) => {
  const { params } = context;
  const id = params.id;
  const { title, description, status } = await req.json();

  try {
    await connectToDB();

    const existingTask = await Task.findById(id);

    if (!existingTask) {
      return new Response('Task not found', { status: 404 });
    }

    existingTask.title = title;
    existingTask.description = description;
    existingTask.status = status;

    await existingTask.save();

    return new Response(JSON.stringify(existingTask), { status: 200 });
  } catch (error) {
    return new Response('Failed to update the task', { status: 500 });
  }
};

// api for deleting a task by id
export const DELETE = async (req: Request, context: any) => {
  const { params } = context;
  const id = params.id;

  try {
    await connectToDB();

    const task = await Task.findByIdAndDelete(id);

    return new Response('Task deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Failed to delete the task', { status: 500 });
  }
};
