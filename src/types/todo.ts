export interface ITodoState {
    todos: ITodoItem[];
    newTodo: string
}

export interface ITodoItem {
    id: number;
    text: string;
    completed: boolean
}
