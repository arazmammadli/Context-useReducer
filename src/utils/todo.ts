import React from "react"
import { ITodoItem,ITodoState } from "../types/todo";
import { ActionType } from "../types/action";

export function nextTodoId(todos: ITodoItem[]) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1
}

export const useTodos = (reducer: (state: ITodoState, action: ActionType) => ITodoState, initial: ITodoState) => React.useReducer(reducer,initial);

export type UseTodosType = ReturnType<typeof useTodos>;
export type AppSelect = UseTodosType[0];
export type AppDispatch = UseTodosType[1];
