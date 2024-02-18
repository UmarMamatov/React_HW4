import React, {useState} from 'react';
import classes from "./ToDo.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

const ToDo = ({todo, handleDelete,handleDone,handleEdit,handleCurrentEdit, isEdit, deleteEditTask}) => {
    const [input, SetInput] = useState(todo.title)
    const [inputD, SetInputD] = useState(deleteEditTask)

    const func = () => {
        return inputD;
    }

    if (isEdit){
        return <div>
            <Input
                value={input}
                onChangeInput={event => SetInput(event.target.value)}
            />
            <Button
                onClick={handleEdit(todo.id,{
                    ...todo, title:input
                })}
                text={'Save'}
            />
            <Button
                onClick={()=>func}
                text={'Cansel'}
            />
        </div>
    }

    return (
        <li className={classes.tasks}>
            <p> id:{todo.id}</p>
            <p> title:{todo.title}</p>
            <Button onClick={()=>handleCurrentEdit(todo.id)} text={'Edit'}/>
            <Button onClick={()=>handleDone(todo.id)} text={'Done'}/>
            <Button text={'Delete'} onClick={()=>handleDelete(todo.id)}/>
        </li>
    );
};

export default ToDo;