import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './Messege.css';

// write "rfce" - this code snippet 
function Messege({userName,msg}) {
    const isUser = userName===msg.username;
    return (
        <div className={`messege_card ${isUser && 'messege_user'}`}>
            <Card className={isUser ? "user_card":"guest_card"}>
            <CardContent>
                <Typography color="white" varient="h5" component="h2">
                {msg.username}: {msg.text}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
}

export default Messege
