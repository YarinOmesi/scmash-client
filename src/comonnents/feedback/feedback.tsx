
export type FeedbackProp = {
    content:string,
    writerNickname:string,
    subject:string
}

export function Feedback(props:FeedbackProp){

    return (
        <pre>
            Subject:{props.subject}
            Content: {props.content}
            WriterNickName:{props.writerNickname}
        </pre>
    )
}