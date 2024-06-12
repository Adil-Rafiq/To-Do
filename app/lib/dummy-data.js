// users.js
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'John Doe',
    email: 'john@example.com',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
  },
];

// tasks.js
const tasks = [
  {
    id: '1',
    title: 'Follow up on client',
    description: 'Contact client to follow up on the project proposal.',
    status: 'pending',
    userId: '1',
  },
  {
    id: '2',
    title: 'Prepare presentation',
    description: 'Create slides for the upcoming meeting.',
    status: 'completed',
    userId: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: '3',
    title: 'Review code',
    description: 'Review the code submitted by the development team.',
    status: 'pending',
    userId: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
];

module.exports = { users, tasks };
