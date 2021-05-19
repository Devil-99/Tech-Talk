import { Card, CardContent, Typography } from '@material-ui/core';
import React,{ forwardRef }  from 'react';
import './Messege.css';

// write "rfce" - this code snippet 
const Messege = forwardRef(({userName,msg},ref) => {      // forwardRef is a higher order function that basically wrapping all the masseges for the animation
    const isUser = userName===msg.username;
    return (
        // ref is basically providing reference to each masseges
        <div ref={ref} className={`messege_card ${isUser && 'messege_user'}`}>
            <Card className={isUser ? "user_card":"guest_card"}>
            <CardContent>
                <Typography color="white" varient="h5" component="h2">
                {!isUser && `${msg.username||'Unkown User'}:`} {msg.text}
                {/* this means if I am the user then it will not show my name.otherwise show */}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
})

export default Messege
