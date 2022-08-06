import { Card, CardContent, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React,{ forwardRef }  from 'react';
import './Messege.css';
import db from './firebase';
import { deleteDoc, doc } from 'firebase/firestore';

// write "rfce" - this code snippet 
const Messege = forwardRef( ( {msg,userName} ,ref) => {
    const isUser = userName===msg.username;
    
    function deleteMSG(msg)
    {
        const xyz=doc(db,"Global_user",msg.id);
        deleteDoc(xyz)
        .catch((err)=>{
            console.log(err);
        });
    }

    if(isUser)
    {
        return (
        <div ref={ref} className={`messege_card ${'messege_user'}`}>
            <Card className={"user_card"}>
            <CardContent className="card-content">
                <Typography className="typo-graph" color="white" varient="h5" component="h2">
                {msg.text}
                {/* this means if I am the user then it will not show my name.otherwise show */}
                </Typography>
                <DeleteIcon color="secondary" fontSize="small" onClick={()=>deleteMSG(msg)} />
            </CardContent>
            {/* <div className='user_time'>
                    <p>timeStamp</p>
            </div> */}
        </Card>
        </div>
            )
    }
    else
    {
        return (
            // ref is basically providing reference to each masseges
            <div ref={ref} className={'messege_card'}>
                <Card className={isUser ? "user_card":"guest_card"}>
                <CardContent className="card-content">
                    <Typography className="typo-graph" color="white" varient="h5" component="h2">
                    {!isUser && `${msg.username||'#'}:`} {msg.text}
                    {/* this means if I am the user then it will not show my name.otherwise show */}
                    </Typography>
                </CardContent>
                {/* <div className='guest_time'>
                    <p>Guest TimeStamp</p>
                </div> */}
            </Card>
            </div>
        )
    }
    
   // return <Fragment>{isUser? <User/>:<Guest/>}</Fragment>;
})
export default Messege
