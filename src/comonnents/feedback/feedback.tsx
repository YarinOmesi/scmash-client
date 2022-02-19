import {Reaction} from "../../Reaction";
import {Card, CardActions, CardContent, IconButton, Typography} from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import {FeedbackModel} from "./FeedbackModel";

export type FeedbackProp = {
    feedbackModel: FeedbackModel
    onReactionClicked: (reaction: Reaction) => void
}


export function Feedback(props: FeedbackProp) {
    const {feedbackModel, onReactionClicked} = props

    function getColor(reaction: Reaction): ('primary' | 'default') {
        return feedbackModel.reaction === reaction ? 'primary' : 'default'
    }

    return (
        <Card sx={{display: 'inline-block', minWidth: 200}} key={feedbackModel.id}>
            <CardContent>
                <Typography variant="h5" component="div">{feedbackModel.subject}</Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">{feedbackModel.writerNickname}</Typography>
                <Typography variant="body2">{feedbackModel.content}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => onReactionClicked(Reaction.Like)} color={getColor(Reaction.Like)}>
                    <ThumbUpAltIcon/>
                </IconButton>
                <IconButton onClick={() => onReactionClicked(Reaction.Dislike)}
                            color={getColor(Reaction.Dislike)}>
                    <ThumbDownIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}