import React from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {FeedbacksPanel} from "./feedbacksPanel";
import {Subject} from "./home";

export type SubjectsTabsProps = {
    tabIndex: number,
    setValue: (tabIndex: number) => void,
    subjects: Array<Subject>
}

export function SubjectsTabs(props: SubjectsTabsProps) {
    const {tabIndex, setValue, subjects} = props
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs example">
                    {
                        subjects.map(subject => (<Tab key={subject.name} label={subject.name}/>))
                    }
                </Tabs>
            </Box>
            {
                props.subjects.map((subject, index) => {
                    return <FeedbacksPanel value={tabIndex} index={index} feedbacks={subject.feedbacks}/>
                })
            }
        </Box>
    )
}