import React, {useState} from 'react';
import classes from "./ToDoList.module.css";
import ToDo from "../toDo/ToDo";

const ToDoList = ({tasks,onClick,handleDone,handleEdit}) => {
    const[CurrentEdit,SetCurrentEdit] = useState()


    return (
        <ul className={classes.list}>
            {
                tasks.map(todo=><ToDo
                    handleCurrentEdit={SetCurrentEdit}
                    isEdit={CurrentEdit===todo.id}
                    handleDelete={onClick}
                    todo={todo}
                    handleDone={handleDone}
                    handleEdit={handleEdit}/>)

            }
        </ul>
    );
};

export default ToDoList;