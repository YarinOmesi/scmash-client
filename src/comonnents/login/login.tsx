import {Alert, Box, Button, Stack, TextField} from "@mui/material";
import {useState} from "react";

type LoginProps = {
    onLogin: (nickname: string) => void
    errorMessage: (string | null)
}

export function Login(props: LoginProps) {
    const [nickname, setNickname] = useState<string>("")
    return (
        <Box sx={{display: 'inline-block'}}>
            <Stack spacing={2}>
                <TextField
                    label="Nickname"
                    variant="outlined"
                    onChange={(e) => setNickname(e.target.value)}
                />
                <Button onClick={() => props.onLogin(nickname)}> Login</Button>
                {props.errorMessage != null &&
                    <Alert severity="error"> {props.errorMessage}</Alert>
                }
            </Stack>
        </Box>

    )
}