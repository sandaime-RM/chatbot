import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Chat = () => {
    return (
        <ListItem>
            <ListItemAvatar>
            <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <div className="p-chat__bubble"></div>
        </ListItem>
    )
}

export default Chat