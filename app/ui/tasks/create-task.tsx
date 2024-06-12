import { FaSave } from 'react-icons/fa';
import { createTask } from '@/app/lib/actions';

export default function NewTask() {
  return (
    <div className="min-h-screen flex flex-col p-4 bg-white space-y-6">
      <h1 className="font-black text-3xl">New Task</h1>

      <form action={createTask} className="space-y-2">
        <input
          type="text"
          id="title"
          name="title"
          className="text-xl font-semibold w-full border-0 border-black/30 p-2 rounded-lg outline-none"
          placeholder="Title of the task..."
          required
        />

        <textarea
          id="description"
          name="description"
          className="w-full border-0 bg-accent/15 p-3 rounded-lg outline-none"
          rows={5}
          placeholder="Description of the task..."
        ></textarea>
        <button
          type="submit"
          className="flex items-center max-w-fit border border-black gap-2 px-4 py-2 text-sm bg-transparent rounded-full hover:bg-accent hover:text-white hover:border-transparent transition-colors duration-300"
        >
          <FaSave className="w-5 h-5" />
          Save
        </button>
      </form>
    </div>
  );
}
