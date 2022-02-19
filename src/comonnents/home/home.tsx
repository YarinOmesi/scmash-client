import {Box} from "@mui/material";
import React, {useEffect, useState} from "react"
import {Feedbacks} from "../../feedbacks";
import {FeedbackModel} from "../feedback/FeedbackModel";
import {MyAppBar} from "./myAppBar";
import {FeedbackInput} from "./feedbackInput";
import {SubjectsTabs} from "./subjectsTabs";


export type Subject = {
    name: string,
    feedbacks: Array<FeedbackModel>
}

function sendFeedback(subject: Subject, content: string) {
    Feedbacks.SendFeedback({subject: subject.name, content: content})
}

export function Home() {
    const [tabIndex, setTabIndex] = useState<number>(0)
    const [feedback, setFeedback] = useState<string>("")
    const [subjects, setSubjects] = useState<Array<Subject>>([])

    useEffect(() => {
        const listener = (newSubjects: Array<Subject>) => setSubjects(newSubjects)
        Feedbacks.OnSubjectsChanged(listener)
        return function cleanEffect() {
            Feedbacks.RemoveListener(listener)
        }
    }, [])

    function onFeedbackSend() {
        sendFeedback(subjects[tabIndex], feedback)
        setFeedback("")
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <MyAppBar/>

            <Box sx={{flexGrow: 1}}>
                <SubjectsTabs tabIndex={tabIndex} setValue={(i: number) => setTabIndex(i)} subjects={subjects}/>
            </Box>

            <FeedbackInput
                setFeedback={(value: string) => setFeedback(value)}
                feedback={feedback}
                onSend={() => onFeedbackSend()}
            />
        </Box>
    )
}