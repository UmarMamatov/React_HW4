import './App.css';
import List from "./Components/list/List";

function App() {
  const list = [
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
  ]

  return (
   <List info={list}/>
  );
}

export default App;
