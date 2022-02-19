import {AppBar, Toolbar, Typography} from "@mui/material";
import React from "react";

export function MyAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" component="div">
                    Auto Scmash
                </Typography>
            </Toolbar>
        </AppBar>
    )
}