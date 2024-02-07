import { useState } from 'react';
import './App.css';

let arr = [];

function App() {
  const [val, setVal] = useState('')
  const [render, setRender] = useState(true)
  function fnAdd(){
    arr.push(val)
   setRender(!render)
  
   

  }
  return (
    <div className="App">
      <center>  <h1>Mevalar ro'yxati</h1></center>
    <div className="wrapper">
    
    <input className='inp' type="text" onChange={(e)=> setVal(e.target.value)} placeholder='Meva' />
      <button className={render ? 'btn' :'btn2' } onClick={fnAdd}>Add</button>
    </div>
      
<div className="box">
  {
arr.map((item)=> {
          return <p className='item'>{item}</p>
          
          
        })
      }
</div>
    
      
    </div>
  );
}

export default App;
