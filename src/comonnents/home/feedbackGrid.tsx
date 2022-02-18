import {Feedback, FeedbackProp} from '../feedback/feedback'
import {Box, Grid} from "@mui/material";
import {useState} from "react";
import {Reaction} from "../../Reaction";

// TODO: this is not best solution
export type FeedbackData = Omit<FeedbackProp, 'onReactionClicked' | 'currentReaction'>

export type FeedbackGridProps = {
    feedbacks: Array<FeedbackData>
}

export function FeedbackStateful(props: FeedbackData) {
    const [reaction, setReaction] = useState<Reaction | null>(null)
    return (
        <Feedback
            content={props.content}
            writerNickname={props.writerNickname}
            subject={props.subject}
            currentReaction={reaction}
            onReactionClicked={new_reaction => {
                setReaction(
                    (new_reaction === reaction) ? null : new_reaction
                )
            }}
        />
    )
}

export function FeedbackGrid(props: FeedbackGridProps) {
    return (
        <Grid>
            {
                props.feedbacks.map(feedback => {
                    return (
                        <Box sx={{margin:1,display:'inline-block'}}>
                            <FeedbackStateful
                                content={feedback.content}
                                writerNickname={feedback.writerNickname}
                                subject={feedback.subject}
                            />
                        </Box>
                    )
                })
            }
        </Grid>
    )
}