import { Card, CardContent, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React,{ forwardRef }  from 'react';
import './Messege.css';
import db from './firebase';

// write "rfce" - this code snippet 
const Messege = forwardRef( ( {msg,userName} ,ref) => {
    const isUser = userName===msg.username;
    const xyz=db.collection("Global_user");
    function deleteMSG(msg)
    {
        xyz
        .doc(msg.id)
        .delete()
        .catch((err)=>{
            console.log(err);
        });
    }

    if(isUser)
    {
        return (
        <div ref={ref} className={`messege_card ${isUser && 'messege_user'}`}>
            <Card className={"user_card"}>
            <CardContent className="card-content">
                <Typography className="typo-graph" color="white" varient="h5" component="h2">
                {msg.text}
                {/* this means if I am the user then it will not show my name.otherwise show */}
                </Typography>
                <DeleteIcon color="secondary" fontSize="small" onClick={()=>deleteMSG(msg)} />
            </CardContent>
        </Card>
        </div>
            )
    }
    else
    {
        return (
            // ref is basically providing reference to each masseges
            <div ref={ref} className={`messege_card ${isUser && 'messege_user'}`}>
                <Card className={isUser ? "user_card":"guest_card"}>
                <CardContent className="card-content">
                    <Typography className="typo-graph" color="white" varient="h5" component="h2">
                    {!isUser && `${msg.username||'#'}:`} {msg.text}
                    {/* this means if I am the user then it will not show my name.otherwise show */}
                    </Typography>
                </CardContent>
            </Card>
            </div>
        )
    }
    
   // return <Fragment>{isUser? <User/>:<Guest/>}</Fragment>;
})
export default Messege
