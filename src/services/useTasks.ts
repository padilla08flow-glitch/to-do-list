import { useState, useEffect } from "react";
import type {Tasks} from '../interfaces/task';
import type { FilterOption } from "../interfaces/filter-type";
import { getStoredTask, saveStoredTask } from "./storage";

export const useTasks = () => {
    const [tasks, setTasks] = useState<Tasks[]>(() => getStoredTask())
    const [filter, setFilter] = useState<FilterOption>('todas')
    const [search, setSearch] = useState('')

    useEffect(() => { saveStoredTask(tasks); }, [tasks]);
    
    const handleAddTask = (title: string) => {
        setTasks([...tasks, {id: crypto.randomUUID(), title, completed: false}])
    }

    const handleActiveTask = (id:string) => {
        setTasks(tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t))
    }

    const HandleDeleteTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const filterTasks = tasks.filter(t => {
        const matches = t.title.toLowerCase().includes(search.toLowerCase())
        if (filter === 'pendientes') return matches && !t.completed;
        if (filter === 'completadas') return matches && t.completed;
        return matches;
    })

    return {
        filterTasks,
        filter, 
        search,
        setFilter, 
        setSearch, 
        handleAddTask,
        handleActiveTask, 
        HandleDeleteTask,
    };
}
