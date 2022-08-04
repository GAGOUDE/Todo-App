import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip';

const TodoList = ({todos, setTodos, setEditTodo}) => {

    // Edit todo
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id );
        setEditTodo(findTodo);
    }

    // Complete todo
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    // Delete todo
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <div>
        {todos.map((todo) => (
            <li 
                className={`list-item ${todo.completed ? "complete-list" : ""}`} 
                key={todo.id}>
                {/* <input 
                    type="text" 
                    value={todo.title}
                    className={`list ${todo.completed ? "complete" : "" }`}
                    onChange={(event) => event.preventDefault()}
                /> */}

                <p
                    className={`list ${todo.completed ? "complete" : ""}`}
                    onChange={(event) => event.preventDefault()}
                >
                    {todo.title}
                </p>

                <div className='btn-all'>
                    {/* Complete btn */}
                    <button 
                        className='button-complete task-button'
                        onClick={()=> handleComplete(todo)}
                        data-tip='Réaliser'
                        data-for='complete-btn'
                    >
                        <i className='fa fa-check-circle'></i>
                        {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
                    </button>
                    <ReactTooltip id='complete-btn' type='success' effect="solid" />
                        
                    {/* Edit btn */}
                    <button 
                        className='button-edit task-button' 
                        onClick={()=> handleEdit(todo)}
                        data-tip="Editer"
                        data-for="edit-btn"
                    >
                        <i className='fa fa-edit'></i>
                    </button>
                    <ReactTooltip id='edit-btn' type='warning' effect="solid" />
                        

                    {/* Delete btn */}
                    <button 
                        className='button-delete task-button'
                        onClick={()=> handleDelete(todo)}
                        data-tip="Supprimer"
                        data-for="delete-btn"
                    >
                        <i className='fa fa-trash'></i>
                    </button>
                    <ReactTooltip id='delete-btn' type='error' effect="solid" />
                </div>
            </li>
        ))}
    </div>
  )
}

export default TodoList