import { useTodoContext } from "../context";

type TodoItemProps = {
    id: number;
    text: string;
    completed: boolean
}

function TodoItem(props: TodoItemProps) {
    const { dispatch } = useTodoContext();
    return (
        <div className="bg-[#262626] rounded-lg py-4 px-4 relative mb-4 last:mb-0">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3 items-start">
                    <div className="min-w-[24px] min-h-[24px] relative top-[4px]">
                        {
                            !props.completed ? <div onClick={() => {
                                dispatch({
                                    type: "TOGGLE_TODO",
                                    payload: props.id
                                })
                            }} className="w-4 h-4 cursor-pointer mx-auto border-2 border-solid border-[#4ea8de] rounded-[50%]"></div>
                                : <div className="cursor-pointer" onClick={() => {
                                    dispatch({
                                        type: "TOGGLE_TODO",
                                        payload: props.id
                                    })
                                }}>
                                    <img src="/images/Done.png" alt="Done" />
                                </div>
                        }
                    </div>
                    <div className="">
                        <p className={`max-w-[602px] text-sm text-left ${!props.completed ? "no-underline text-[#f2f2f2]" : "line-through text-[#808080]"}`}>{props.text}</p>
                    </div>
                </div>
                <div className="cursor-pointer" onClick={() => {
                    dispatch({
                        type: "REMOVE_TODO",
                        payload: props.id
                    })
                }}>
                    <img src="/images/trash.png" alt="Trash" />
                </div>
            </div>
        </div>
    )
}

export default TodoItem;
