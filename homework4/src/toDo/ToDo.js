import React, {useState} from 'react';
import classes from "./ToDo.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

const ToDo = ({todo, handleDelete,handleDone,handleEdit,handleCurrentEdit, isEdit}) => {
    const [input, SetInput] = useState(todo.title)

    if (isEdit){
        return <div>
            <Input
                value={input}
                onChangeInput={event => SetInput(event.target.value)}
            />
            <Button
                onClick={()=>{handleEdit({
                    ...todo, title:input
                })
                handleCurrentEdit(null)
                }}
                text={'Save'}
            />
            <Button
                onClick={()=>handleCurrentEdit(null)}
                text={'Cansel'}
            />
        </div>
    }
    const style = todo.completed && classes.isDone;
    return (
        <li className={`${classes.tasks} ${todo.completed && classes.done}`}>
            <p className={`${style}`} > id:{todo.id}</p>
            <p className={`${style}`}> title:{todo.title}</p>
            <Button onClick={()=>handleCurrentEdit(todo.id)} text={'Edit'}/>
            <Button onClick={()=>handleDone(todo.id)} text={'Done'}/>
            <Button text={'Delete'} onClick={()=>handleDelete(todo.id)}/>
        </li>
    );
};

export default ToDo;