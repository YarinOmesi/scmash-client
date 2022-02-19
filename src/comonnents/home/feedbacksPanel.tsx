import {FeedbackModel} from "../feedback/FeedbackModel";
import {Box} from "@mui/material";
import {FeedbackGrid} from "./feedbackGrid";
import {Feedbacks} from "../../feedbacks";
import React from "react";

export type FeedbackPanelProps = {
    feedbacks: Array<FeedbackModel>,
    value: number,
    index: number
}

export function FeedbacksPanel(props: FeedbackPanelProps) {
    return (
        <Box>
            {props.value === props.index &&
                <FeedbackGrid
                    feedbacks={props.feedbacks}
                    setFeedbackReaction={(newReaction, feedback) => {
                        Feedbacks.SetFeedbackReaction(newReaction, feedback)
                    }}
                />


            }
        </Box>
    )
}