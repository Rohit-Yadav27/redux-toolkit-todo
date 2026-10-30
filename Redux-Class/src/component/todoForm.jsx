import { useState } from "react";
import {useDispatch} from "react-redux"
import {addTodo} from "../features/Todo/todoSlice.js"


export function Form() {

    const [state, setState] = useState("")
    const dispatch = useDispatch();

    function formSubmit(event){
        event.preventDefault()
        dispatch(addTodo(state))
        setState("");
    }

    

    return(
        <>
        <form onSubmit={formSubmit}>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>
        <button type="submit">submit</button>
        </form>
        </>
    )
}