import {Reaction} from "../../Reaction";
import {Card, CardActions, CardContent, IconButton, Typography} from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

export type FeedbackProp = {
    content: string,
    writerNickname: string,
    subject: string,
    currentReaction: (Reaction | null)
    onReactionClicked: (reaction: Reaction) => void
}


export function Feedback(props: FeedbackProp) {
    function getColor(reaction:Reaction): ('primary' | 'default'){
        return props.currentReaction === reaction ? 'primary' :'default'
    }
    return (
        <Card sx={{display: 'inline-block', minWidth: 200}}>
            <CardContent>
                <Typography variant="h5" component="div">{props.subject}</Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">{props.writerNickname}</Typography>
                <Typography variant="body2">{props.content}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => props.onReactionClicked(Reaction.Like)} color={getColor(Reaction.Like)} >
                    <ThumbUpAltIcon/>
                </IconButton>
                <IconButton onClick={() =>  props.onReactionClicked(Reaction.Dislike)} color={getColor(Reaction.Dislike)}>
                    <ThumbDownIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}