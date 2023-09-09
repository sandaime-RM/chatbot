import React from "react";
import List from '@mui/material/List';
import Chat from "./Chat";


const Chats = () => {
    return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Chat />
    </List>
    )
}

export default Chats