import { Card, CardContent, Typography } from '@material-ui/core';
import React,{ forwardRef }  from 'react';
import './Messege.css';

// write "rfce" - this code snippet 
const Messege = forwardRef(({userName,msg},ref) => {
    const isUser = userName===msg.username;
    return (
        <div ref={ref} className={`messege_card ${isUser && 'messege_user'}`}>
            <Card className={isUser ? "user_card":"guest_card"}>
            <CardContent>
                <Typography color="white" varient="h5" component="h2">
                {msg.username}: {msg.text}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
})

export default Messege
