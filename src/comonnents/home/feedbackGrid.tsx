import {Feedback} from '../feedback/feedback'
import {Box, Grid} from "@mui/material";
import {Reaction} from "../../Reaction";
import {FeedbackModel} from "../feedback/FeedbackModel";


export type FeedbackGridProps = {
    feedbacks: Array<FeedbackModel>,
    setFeedbackReaction: (newReaction: Reaction, feedback: FeedbackModel) => void
}


export function FeedbackGrid(props: FeedbackGridProps) {

    return (
        <Grid>
            {
                props.feedbacks.map(feedback => {
                    return (
                        <Box sx={{margin: 1, display: 'inline-block'}}>
                            <Feedback
                                feedbackModel={feedback}
                                onReactionClicked={new_reaction => {
                                    props.setFeedbackReaction(
                                        (new_reaction === feedback.reaction) ? Reaction.NoReaction : new_reaction,
                                        feedback
                                    )
                                }}
                            />
                        </Box>
                    )
                })
            }
        </Grid>
    )
}