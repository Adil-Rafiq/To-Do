export type Task = {
  _id: string;
  creator: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
} | null;
