import React from 'react';
import classes from "./ToDoList.module.css";
import ToDo from "../toDo/ToDo";

const ToDoList = ({tasks,onClick}) => {
    return (
        <ul className={classes.list}>
            {
                tasks.map(todo=><ToDo handleDelete={onClick} todo={todo}/>)
            }
        </ul>
    );
};

export default ToDoList;