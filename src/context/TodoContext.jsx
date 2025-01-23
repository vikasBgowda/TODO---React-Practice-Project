import { createContext, useState } from "react";

export const TodoContext = createContext(null);

const TodoContextProvider = ({children})=>{

    const [TodoList, setTodoList] = useState([])
    const [Iscompleted, setIscompleted] = useState(false)

    const handleRemoveClick=(itemDetails)=>{
        const cpyTodo=[...TodoList];
        const findIndex=TodoList.findIndex((item)=>item.id===itemDetails.id);
        if(findIndex!=-1){
            cpyTodo.splice(findIndex,1);
        }else{

        }
        setTodoList(cpyTodo);
        localStorage.setItem('TodoList',JSON.stringify(cpyTodo))
    }

    const handleCompleted=(itemDetails,Completed)=>{
        const cpyTodo=[...TodoList];
        const findIndex=TodoList.findIndex((item)=>item.id===itemDetails.id);
        if(Completed){
            cpyTodo[findIndex]={
                ...cpyTodo[findIndex],
                IsDone:true,
            } 
        }else{
            cpyTodo[findIndex]={
                ...cpyTodo[findIndex],
                IsDone:false,
            } 
        }
        setTodoList(cpyTodo);
        localStorage.setItem('TodoList',JSON.stringify(cpyTodo))
    }

    return( 
    <TodoContext.Provider value={{TodoList, setTodoList ,handleRemoveClick , Iscompleted, handleCompleted,setIscompleted}}>
        {children}
    </TodoContext.Provider>
    )
}

export default TodoContextProvider