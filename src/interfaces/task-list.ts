import type { Tasks } from './task';

export interface Props {
  tasks: Tasks[];
  onActiveTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}