import { useState } from 'react'


import './App.css'

function App() {
  let [count, setCount] = useState(0)

 function Increment() {
  if (count<20) {
    setCount(count+1);
  } else {
    
    setCount(count);
    alert('you can not increase above 20');
  }
  }

  function Decrement() {
    if (count>0) {
      setCount(count-1);
    } else {
      setCount(count)
      alert('you can not decrease below 0');
      
    }
    
  }

  return (
    <>
      <h1 className='bg-slate-800 text-white text-6xl text-center m-5 p-10 rounded-md  '>
        COUNTER APP
        </h1>

        <center className='bg-amber-600 rounded mt-40 p-20 h-50 w-50 m-80 flex flex-col'>
          <h1 className='text-white text-4xl mb-5 p-5'>{count}</h1>

          <div className='m-5 p-5 grid-cols-2'>
          <button className='bg-white text-black text-2xl p-5 m-2 rounded' onClick={Increment} >Increment</button>
          <button className='bg-white text-black text-2xl p-5 m-2 rounded' onClick={Decrement}>Decrement</button>
          </div>
          
        </center>
        </>
  )
}

export default App
