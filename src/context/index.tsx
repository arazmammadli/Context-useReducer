import React, { createContext, useContext } from "react";
import { ActionType } from "../types/action";
import { ITodoItem, ITodoState } from "../types/todo";
import { AppDispatch, AppSelect, nextTodoId, useTodos } from "../utils/todo";

type ContextType = {
    state: AppSelect,
    dispatch: AppDispatch
}

function addTodo(todos: ITodoItem[], text: string) {
    return [
        ...todos,
        {
            id: nextTodoId(todos),
            text,
            completed: false
        }
    ]
}

function removeTodo(todos: ITodoItem[], id: number) {
    return todos.filter((todo) => todo.id !== id)
}

function updateTodo(todos: ITodoItem[], text: string, id: number) {
    return todos.map((todo) => ({
        ...todo,
        text: todo.id === id ? text : todo.text
    }))
}

function toggleTodo(todos: ITodoItem[], id: number) {
    return todos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed
    }))
}

const initialState: ITodoState = {
    todos: [],
    newTodo: "",
}

function todoReducer(state:ITodoState, action: ActionType) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: addTodo(state.todos, state.newTodo),
                newTodo: ""
            }
        case "REMOVE_TODO":
            return {
                ...state,
                todos: removeTodo(state.todos, action.payload)
            }
        case "UPDATE_TODO":
            return {
                ...state,
                todos: updateTodo(state.todos, action.payload.text, action.payload.id)
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: toggleTodo(state.todos, action.payload)
            }
        case "SET_TODO":
            return {
                ...state,
                newTodo: action.payload
            }
        default:
            return state
    }
}

const TodoContext = createContext<ContextType>({} as ContextType);

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useTodos(todoReducer, initialState);
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext);

