import logo from './logo.svg';
import './App.css';
import { startTransition, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UC, LC, NC, SC } from './data/PassChar';




function App() {
  let[uppercase,setUppercase]=useState(false)
  let[lowercase,setLowercase]=useState(false)
  let[number,setNumber]=useState(false)
  let[symbols,setSymbols]=useState(false)
  let[passwordlen,setPasswordLen]=useState(10)
  let[fpass,setfPass]=useState('')

  let createPassword=()=>{
    let finaPass=''
    let charSet=''
    if(uppercase || lowercase || number || symbols)
      {
        if(uppercase) charSet+=UC;
        if(lowercase) charSet+=LC;
        if(number) charSet+=NC;
        if(symbols) charSet+=SC;
    
        for(let i=0; i<passwordlen; i++)
        {
          finaPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
        }
          setfPass(finaPass)
      }
    else
    {
      toast.error("Please select One Checkbox");
      
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }
  

  return (
    <>
      <div className='passwordBox'>
        <h3>Password Generator</h3>

        <div className='passwordBoxin'>
          <input type='text' value={fpass} readOnly/>  <button onClick={copyPass}>Copy</button>
        </div>

        <div className='passLength'>
          <label>password Length</label>
          <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)}/>
        </div>

        <div className='passLength'>
          <label>Include uppercase letters</label>
          <input type='checkbox'checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>

        <div className='passLength'>
          <label>Include lowercase letters</label>
          <input type='checkbox'checked={lowercase} onChange={()=>setLowercase(!lowercase) }/>
        </div>

        <div className='passLength'>
          <label>Include numbers</label>
          <input type='checkbox'checked={number} onChange={()=>setNumber(!number)}/>
        </div>

        <div className='passLength'>
          <label>Include symbols</label>
          <input type='checkbox'checked={symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>

       
        <button className='btn' onClick={createPassword}>Generate Password</button>


      </div>
       <ToastContainer />
    </>
   
  );
}

export default App;
