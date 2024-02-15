import './App.css';
import Modal from "./modal/Modal";
import {useState} from "react";
import Count from "./count/Count";
import Input from "./input/Input";

function App() {
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(!show)
    }


    const [input,setInput]= useState('')
    const onChangeInput = (event)=>{
        setInput(event.target.value)
    }
    const color = ()=>{
        if (input.length<5){
            return 'green'
        }else return 'red'
    }
  return (
      <>
          {
              show && <Modal handleShow={handleShow}>
              </Modal>
          }
          <button onClick={handleShow}>Open</button>
          <Count/>
          <p className='inputValue' style={{color: color()}}>{input}</p>
          <Input  placeholder={'write'} onChangeInput={onChangeInput}/>
      </>

  );
}

export default App;
