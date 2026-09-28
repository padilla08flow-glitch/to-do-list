import type { Tasks } from "./task";

export interface Props {
    task:Tasks;
    onActiveTask: (id: string) => void;
    onDeleteTask: (id:string) => void;
}