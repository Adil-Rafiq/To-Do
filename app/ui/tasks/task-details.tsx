export default function TaskCard() {
  return (
    <div className="min-h-screen flex flex-col p-4 bg-white space-y-6">
      <h1 className="font-black text-3xl">Task Details</h1>

      <div className="space-y-2">
        <p className="text-3xl font-semibold">Follow up on client</p>
        <p className="bg-accent/15 p-4 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a
          necessitatibus, ab ad inventore, maxime sequi sit placeat error
          debitis reprehenderit provident facere pariatur iste odit possimus sed
          assumenda magnam!
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded">
          Edit
        </button>
        <button className="px-2 py-1 text-sm text-white bg-red-500 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}
