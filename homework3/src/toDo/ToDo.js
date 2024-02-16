import React from 'react';
import classes from "./ToDo.module.css";
import Button from "../button/Button";

const ToDo = ({todo, handleDelete}) => {
    return (
        <li className={classes.tasks}>
            <p> id:{todo.id}</p>
            <p> title:{todo.title}</p>
            <Button text={'Delete'} onClick={()=>handleDelete(todo.id)}/>
        </li>
    );
};

export default ToDo;