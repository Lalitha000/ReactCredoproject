import React from 'react';


function AddTodo(props) {

    const {updateTodo} = props;
  return (
    <button  onClick={updateTodo} className='btn btn-primary mt-4'>Add Task</button>
  )
}



export default AddTodo
