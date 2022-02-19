import {Button, Card, CardActions, CardContent, TextField} from "@mui/material";
import React from "react";

export type FeedbackInputProps = {
    feedback: string,
    setFeedback: (value: string) => void,
    onSend: () => void
}

export function FeedbackInput(props: FeedbackInputProps) {
    const {feedback, setFeedback, onSend} = props
    return (
        <Card>
            <CardContent>
                <TextField
                    value={feedback}
                    label="Write a feedback..."
                    variant="standard"
                    onChange={(e) => setFeedback(e.target.value)}
                />
            </CardContent>
            <CardActions>
                <Button color="primary" onClick={() => onSend()}>
                    Send
                </Button>

            </CardActions>
        </Card>
    )
}