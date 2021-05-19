import { useState,useEffect } from 'react';
import {Button,FormControl,InputLabel,Input,} from '@material-ui/core';
import './App.css';
import Messege from './Messege';
import db from './firebase';
import Firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {

  const [input,setInput]=useState('');
  const [messege,setMessege]=useState([
    {username:'Souvik' , text:"Hey! Souvik is here"},
  ]);
  const [username,setUsername]=useState('')

  // useState = Basically is a variable in react
  // useEffect = run code on a condition in react

  useEffect(()=>{
    //snapshot = all the messeges with different ids in object form
    //  docs.data = text and username in object form just like {username:'Soumalya' , text:"Amazon intern is here"} this

    db.collection('messages').orderBy('timeStamp','desc').onSnapshot(snapshot=>{
      setMessege(snapshot.docs.map(doc => doc.data()));
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name Here!'))
    // when it is empty inside [] ,means this code runs once when app component loads
  }, [])

  // console.log(input);
  // console.log(messege);

  const sendMessege=(event)=>{
    event.preventDefault(); // submit button generally refresh the page so This will stop the page from refreshing

    db.collection('messages').add({
      text:input,
      username:username,
      timeStamp: Firebase.firestore.FieldValue.serverTimestamp() // this is using the database's timezone not user timezone so that user from diff country can also use

    })

    // setMessege([...messege,{username:username,text:input}]); // "...messege" is used to append the array.without this the array will get updated every time
    setInput('');
  }
  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      <form className="app_form">
      {/* Its a trick to click the button by hitting enter,just wrap this into a form and typecast the button into submit */}

      <FormControl className="app_formctrl">
      <InputLabel>Send Messege</InputLabel>
      <Input className="app_input" placeholder='Enter a messege...' value={input} onChange={event=>setInput(event.target.value)}/>
      <Button  className="app_button" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessege}>Send</Button>
      </FormControl>
      </form>

    <FlipMove>
    { // print the value on screen(jsx) - map is like a auto keyword.it automatically traverse the array without any loop
        messege.map(msg=>(
          <Messege userName={username} msg={msg} />
        ))
      }
    </FlipMove>
      

    </div>
  );
}

export default App;
