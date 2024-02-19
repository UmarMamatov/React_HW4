import './App.css';
import Modal from "./modal/Modal";
import React, {useState} from "react";
import Input from "./input/Input";
import ToDoList from "./toDoList/ToDoList";
import Button from "./button/Button";

function App() {
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(!show)
    }


    const [input,setInput]= useState('')
    console.log(input)

    const [SearchInput,setSearchInput]= useState('')

    const onChangeInput = (event)=>{
        setInput(event.target.value)
    }
    const color = ()=>{
        if (input.length<5){
            return 'green'
        }else return 'red'
    }


    const [tasks, setTasks]= useState([
        {
            id:1 ,
            title: 'coding',
            completed: false
        },
        {
            id:2,
            title: 'eat',
            completed: false
        },
        {
            id:3,
            title: 'sleep',
            completed: false
        }
    ])
    console.table(tasks)

    const handleChange = ()=>{
        setTasks(
            [...tasks,{
                id: tasks.length+1,
                title:input,
                completed:false,
            }]
        )
    }
    const handleDelete = (id)=>{
        {
            setTasks(tasks.filter(task => task.id!== id));
        }
    }
    const handleDone= (id)=>{
        console.log(id)
        tasks.map(task=>{
            if (task.id===id){
                return task.completed = !task.completed
            }
            return tasks
        })
        setTasks([...tasks])
    }

    const handleEdit= (editText)=>{
        console.log(editText)
        tasks.map(task=>{
            if (task.id===editText.id){
                return task.title = editText.title
            }
        })
        setTasks(tasks)
    }


    const [tasksSearch, setTasksSearch]= useState(tasks)


    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchInput(searchValue);
        if (searchValue===""){
            setTasks(tasksSearch)
        }else {
            const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchValue));
            setTasks(filteredTasks);
        }
    };


  return (
      <>
          <Input placeholder={'Найди таск'} type={'search'} onChangeInput={handleSearch}/>
          {
              show && <Modal handleShow={handleShow}>
                  <Input
                      placeholder={'Добавьте таск'}
                      onChangeInput={onChangeInput}

                  />
                  <Button onClick={handleChange} text={'Add'}/>
              </Modal>
          }
          <button onClick={handleShow}>Open</button>

          <ToDoList  tasks={tasks} onClick={handleDelete} handleDone={handleDone} handleEdit={handleEdit} />
      </>

  );
}

export default App;
