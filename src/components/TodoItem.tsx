import { useState } from "react";
import { useTodoContext } from "../context";

type TodoItemProps = {
    id: number;
    text: string;
    completed: boolean
}

function TodoItem(props: TodoItemProps) {
    const { dispatch } = useTodoContext();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [updateText, setUpdateText] = useState<string>(props.text);
    return (
        <div className="bg-[#262626] rounded-lg py-4 px-4 relative mb-4 last:mb-0">
            <div className="flex flex-row justify-between">
                {
                    !isUpdate ? <div className="flex flex-row gap-3 items-start">
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
                    </div> : <div className="flex flex-row w-full gap-2">
                        <textarea name="text" id="text" onChange={(e) => setUpdateText(e.target.value)} value={updateText} className="overflow-hidden text-white w-full outline-none max-h-[60px] resize-none bg-[#333] px-2 py-2"></textarea>
                        <div className="flex flex-row gap-2">
                            <button type="button" className="border-[#4EA8DE] text-[#4EA8DE]" onClick={() => {
                                dispatch({
                                    type: "UPDATE_TODO",
                                    payload: {
                                        id: props.id,
                                        text: updateText
                                    }
                                })
                                setIsUpdate(false);
                            }}>Update</button>
                            <button type="button" className="text-[#f2f2f2]" onClick={() => setIsUpdate(false)}>Cancel</button>
                        </div>
                    </div>
                }
                {
                    !isUpdate ? <div className="flex flex-row gap-2 items-start">
                        <div className="cursor-pointer" onClick={() => {
                            dispatch({
                                type: "REMOVE_TODO",
                                payload: props.id
                            })
                        }}>
                            <img src="/images/bin.png" alt="Trash" />
                        </div>
                        <div className="cursor-pointer" onClick={() => setIsUpdate(prevState => !prevState)}>
                            <img src="/images/edit.png" alt="Edit" />
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default TodoItem;
