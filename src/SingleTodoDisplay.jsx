import React, { useContext } from 'react'
import { TodoContext } from './context/TodoContext'


export const SingleTodoDisplay = ({singleTodo}) => {
    const {handleRemoveClick,handleCompleted,TodoList} = useContext(TodoContext)
  return (
    <div className='flex flex-col p-2 gap-4 '>
        <div className='flex justify-start items-center'>
            <h1 >Title : {singleTodo.Title}</h1>
        </div>
        <div className='flex justify-start items-center'>
            <h1>Description : {singleTodo.Description}</h1>
        </div>
        <div className=' flex justify-between'>
            <button 
            onClick={()=>handleCompleted(singleTodo,true)}
            disabled={singleTodo.IsDone}
            className='disabled:bg-green-300 bg-gray-800 text-white px-2 py-2 rounded-lg m-2'>Mark As Complete</button>
            <button 
            onClick={()=>handleCompleted(singleTodo,false)}
            disabled={!singleTodo.IsDone}
            className='disabled:bg-gray-300 bg-gray-800 text-white px-2 py-2 rounded-lg m-2'>Mark As Incomplete</button>
            <button
            onClick={()=>handleRemoveClick(singleTodo)}
            className='bg-red-400 text-white px-2 py-2 rounded-lg m-2'>Remove</button>
        </div>
        <hr className='border-2'/>
    </div>
  )
}
