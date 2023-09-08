import React from "react";
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';

const Answer = (props) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">{props.content}</Button>
        </Stack>
    )
}

export default Answer;