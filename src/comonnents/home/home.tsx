import {
    AppBar,
    Box, Button, Card, CardActions, CardContent,
    Tab,
    Tabs,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import React, {useState} from "react"
import {FeedbackData, FeedbackGrid} from "./feedbackGrid";


type Subject = {
    name: string,
    feedbacks: Array<FeedbackData>
}

function MyAppBar() {
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

function TabPanel(props: { getFeedbacks: () => Array<FeedbackData>, value: number, index: number }) {

    return (
        <Box>
            {props.value === props.index &&
                <FeedbackGrid feedbacks={props.getFeedbacks()}/>
            }
        </Box>
    )
}

function MyTabs(props: { tabIndex: number, setValue: (tabIndex: number) => void, subjects: Array<Subject> }) {
    const {tabIndex, setValue, subjects} = props
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs example">
                    {
                        subjects.map(subject => (<Tab label={subject.name}/>))
                    }
                </Tabs>
            </Box>
            {
                props.subjects.map((subject, index) => {
                    return <TabPanel value={tabIndex} index={index} getFeedbacks={() => subject.feedbacks}/>
                })
            }
        </Box>
    )
}


function FeedbackInput(props: { feedback: string, setFeedback: (value: string) => void, onSend: () => void }) {
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

export function Home() {
    const [tabIndex, setTabIndex] = useState<number>(0)
    const [feedback, setFeedback] = useState<string>("")
    const [subjects, setSubjects] = useState<Array<Subject>>([
        {name: "logistics", feedbacks: []},
        {name: "site", feedbacks: []},
    ])
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <MyAppBar/>

            <Box sx={{flexGrow: 1}}>
                <MyTabs tabIndex={tabIndex} setValue={(i: number) => setTabIndex(i)} subjects={subjects}/>
            </Box>

            <FeedbackInput setFeedback={(value:string) => setFeedback(value)} feedback={feedback} onSend={() => {
                // handle feedback send
                const subject: Subject = subjects[tabIndex]
                const newFeedback: FeedbackData = {
                    subject: subject.name,
                    content: feedback,
                    writerNickname: 'nigger'
                }
                const newFeedBacks = subjects[tabIndex].feedbacks.concat([newFeedback])
                let newSubjects = subjects.slice()
                newSubjects[tabIndex] = {...subject, feedbacks: newFeedBacks}
                setSubjects(newSubjects)
                setFeedback("")
            }}/>

        </Box>
    )
}