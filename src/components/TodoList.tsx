import { useMemo } from "react";
import { useTodoContext } from "../context";
import TodoItem from "./TodoItem";

function TodoList() {
    const { state } = useTodoContext();

    const doneTasks = useMemo(() => {
        return state.todos.filter((todo) => todo.completed === true)
    }, [state])

    return (
        <div className="w-full">
            <div className="flex justify-between mb-6">
                <div className="flex flex-row gap-2">
                    <span className="text-sm font-bold leading-[auto] text-[#4ea8de]">Created tasks</span>
                    <div className="w-6 min-h-[18px] flex justify-center items-center rounded-full bg-[#333333]">
                        <span className="text-xs font-bold text-[#d9d9d9]">{state.todos.length || 0}</span>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <span className="text-sm font-bold leading-[auto] text-[#8284fa]">Completed tasks</span>
                    {
                        state.todos.length === 0 ? <div className="w-6 min-h-[18px] flex justify-center items-center rounded-full bg-[#333333]">
                            <span className="text-xs font-bold text-[#d9d9d9]">0</span>
                        </div> : <div className="min-h-[18px] flex justify-center items-center rounded-full bg-[#333333] px-2 py-[2px]">
                            <span className="text-xs font-bold text-[#d9d9d9]">{doneTasks.length} de {state.todos.length}</span>
                        </div>
                    }
                </div>
            </div>
            {
                state.todos.length === 0 ? <div className="w-full py-16 px-6 rounded-lg border-t border-solid border-[#808080]">
                    <div className="w-full flex justify-center mb-4">
                        <img src="/images/Clipboard.png" alt="Clipboard" />
                    </div>
                    <p className="leading-[140%] text-base text-[#808080] text-center">You don't have any registered tasks yet. <br /> Create tasks and organize your to-do items.</p>
                </div> : <div className="w-full rounded-lg">
                    {
                        state.todos.map((todo) => (
                            <TodoItem key={todo.id} {...todo} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default TodoList;