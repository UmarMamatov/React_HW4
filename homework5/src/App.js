import './App.css';
import Modal from "./modal/Modal";
import React, {useEffect, useState} from "react";
import Input from "./input/Input";
import ToDoList from "./toDoList/ToDoList";
import Button from "./button/Button";
import Users from "./users/Users";

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


    let [tasks, setTasks]= useState([])
    console.table(tasks)



    const handleChange = ()=>{
        setTasks(
            [...tasks,{
                    id: tasks.length ===0 ? 1 : tasks[tasks.length-1].id+1,
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

    useEffect(() => {
        const myLocalList = JSON.parse(localStorage.getItem('tasks'))
        if (myLocalList === null) {
            return localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        if (myLocalList.length !== 0 ) {
            setTasks(myLocalList)
        }
    }, []);


    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const data = await fetch('https://jsonplaceholder.org/users')
        const users = await (data.json())
        setUsers(users)
    }


    const [filterValue, setFilterValue] = useState('All')

    const handleChangeFilter = (event)=>{
        setFilterValue(event.target.value)
    }

    const filterTasks = tasks.filter(task =>{
        switch (filterValue){
            case 'All':
                return true
            case 'Done':
                return task.completed
            case 'Not done':
                return !task.completed
            default:
                return true
        }
    })

    const deleteTasks = ()=>{
        localStorage.removeItem('tasks');
        setTasks([]);
    }



  return (
      <>
          <div>
              <select value={filterValue} onChange={handleChangeFilter}>
                  <option value="All">All Task</option>
                  <option value="Done">Completed</option>
                  <option value="Not done">Not Completed</option>
              </select>
          </div>
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
          <button onClick={getUsers} >Get users</button>
          <button onClick={deleteTasks} >Очистить</button>

          <ToDoList  tasks={filterTasks} onClick={handleDelete} handleDone={handleDone} handleEdit={handleEdit} />
          <Users users={users}/>


      </>
  );
}

export default App;
