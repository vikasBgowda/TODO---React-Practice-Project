import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import { SingleTodoDisplay } from '../SingleTodoDisplay'
import { v4 as uuidv4 } from "uuid";
export const TodoIndex = () => {

    const {Counter , TodoList, setTodoList,setCounter}=useContext(TodoContext)
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')

    function handleFormSubmit(e){
        e.preventDefault();
        let cpyTodo=[...TodoList]
        cpyTodo.push({
                id:uuidv4(),
                Title:Title,
                Description:Description,
                IsDone:false
            }
        )
        setTodoList(cpyTodo)
        localStorage.setItem('TodoList',JSON.stringify(cpyTodo))        
        setTitle('')
        setDescription('')
    }

    useEffect(()=>{
        const list=localStorage.getItem('TodoList');
        const result=list? JSON.parse(list):[];
        setTodoList(result)
    },[])

    console.log(TodoList)


  return (
    <div className='flex flex-col items-center justify-center m-4   '>
        <div className='p-5 gap-2 border-2 ' >
            <h1 className='text-2xl font-bold '>Add Todo</h1>
            <div className='flex flex-col justify-center items-center m-2 '> 
                <form onSubmit={(e)=>handleFormSubmit(e)} className='flex flex-col justify-center items-center m-5 p-5 gap-5'>
                    <label htmlFor="title" className=''> TODO Title</label>
                    <input 
                    value={Title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className='border-2 p-x py-2 '
                    type="text" placeholder='Todo Title' name='title' id='title'/>
                    <label htmlFor="description">TODO Description</label>
                    <input 
                    value={Description}
                    onChange={(e)=>setDescription(e.target.value)}
                    className='border-2 p-x py-2 '
                    type="text" name="description" id="description" placeholder='Todo Description'/>
                    <button type='submit' 
                    className='px-2 py-2 bg-black text-white rounded-lg'
                    >Add TODO</button>
                </form>
            </div>
        </div>
        <div>
            <h1 className='text-2xl font-semibold '>TODO List</h1>
                {(!TodoList || TodoList.length === 0) && (
            <h1 className='text-lg font-semibold m-4'>No Todos To Complete</h1>
               )}
            {
                TodoList?.map((singleTodo)=><SingleTodoDisplay key={singleTodo.id} singleTodo={singleTodo} />)
            }
        </div>
    </div>
  )
}
