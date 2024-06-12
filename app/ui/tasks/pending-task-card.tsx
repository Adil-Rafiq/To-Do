import { FaEdit, FaTrash } from 'react-icons/fa';

export default function PendingTaskCard() {
  return (
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        id="task-1"
        className="appearance-none h-4 w-4 border border-black/30 cursor-pointer"
      />
      <label htmlFor="task-1" className="block cursor-pointer">
        <p className="text-lg font-bold">Follow up on client</p>
      </label>

      <div className="flex gap-4">
        <button className="flex items-center max-w-fit text-sm bg-transparent rounded-full hover:bg-accent hover:text-white hover:border-transparent transition-colors duration-300">
          <FaEdit className="w-4 h-4" />
        </button>
        <button className="flex items-center max-w-fit text-sm bg-transparent rounded-full hover:bg-accent hover:text-white hover:border-transparent transition-colors duration-300">
          <FaTrash className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
