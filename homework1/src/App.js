import './App.css';
import Header from "./Components/Header/Header";

function App() {
  const head = ['main page',"cards", 'contact','about as']
  return (
   <Header info={head}/>
  );
}

export default App;
