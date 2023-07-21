export type ActionType =
    | { type: "ADD_TODO" }
    | { type: "REMOVE_TODO", payload: number }
    | {
        type: "UPDATE_TODO", payload: {
            id: number,
            text: string
        }
    }
    | { type: "TOGGLE_TODO", payload: number }
    | { type: "SET_TODO", payload: string }