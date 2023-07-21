import { useTodoContext } from "../context";

function TodoAdd() {
    const { state, dispatch } = useTodoContext();

    return (
        <div className="w-full flex flex-row gap-2">
            <input type="text" value={state.newTodo} onChange={(e) => {
                dispatch({
                    type: "SET_TODO",
                    payload: e.target.value
                })
            }} name="todo" className="w-full text-[#f2f2f2] px-4 outline-none bg-[#262626] placeholder:text-[#808080] py-4 rounded-lg" id="todo" placeholder="Added new todo" />
            <button type="submit" onClick={() => {
                if (state.newTodo) {
                    dispatch({
                        type: "ADD_TODO",
                    })
                } else {
                    return;
                }
            }} className="rounded-lg bg-[#1e6f9f] text-[#f2f2f2] px-4 py-4 outline-none focus:outline-none focus-visible:outline-none">
                <span className="text-sm leading-[140%] font-bold">Add</span>
            </button>
        </div>
    )
}

export default TodoAdd;