import { useState,useEffect } from 'react';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import './App.css';
import Messege from './Messege';

function App() {

  const [input,setInput]=useState('');
  const [messege,setMessege]=useState([
    {username:'Souvik' , text:"Hey! Souvik is here"},
    {username:'Soumalya' , text:"Amazon intern is here"},
    {username:'Subhayan' , text:"I'm a Doctor you know!"}
  ]);
  const [username,setUsername]=useState('')

  // useState = Basically is a variable in react
  // useEffect = run code on a condition in react

  useEffect(() => {
    setUsername(prompt('Please enter your name Here!'))
    // when it is empty inside [] ,means this code runs once when app component loads
  }, [])

  // console.log(input);
  // console.log(messege);

  const sendMessege=(event)=>{
    event.preventDefault(); // submit button generally refresh the page so This will stop the page from refreshing
    setMessege([...messege,{username:username,text:input}]); // "...messege" is used to append the array.without this the array will get updated every time
    setInput('');
  }
  return (
    <div className="App">
      <h1>Creating chat application</h1>
      <h3>Welcome {username}</h3>
      <form>
      {/* Its a trick to click the button by hitting enter,just wrap this into a form and typecast the button into submit */}

      <FormControl>
      <InputLabel>Send Messege</InputLabel>
      <Input value={input} onChange={event=>setInput(event.target.value)}/>
      <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessege}>Send Messege</Button>
      </FormControl>
      </form>

      { // print the value on screen(jsx) - map is like a auto keyword.it automatically traverse the array without any loop
        messege.map(msg=>(
          <Messege userName={username} msg={msg} />
        ))
      }

    </div>
  );
}

export default App;
