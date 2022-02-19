import {Subject} from "./comonnents/home/home";
import {FeedbackModel} from "./comonnents/feedback/FeedbackModel";
import {Reaction} from "./Reaction";

export namespace Feedbacks {
    type Listener = (subjects: Array<Subject>) => void
    let subjects: Array<Subject> = [
        {name: "logistics", feedbacks: []},
        {name: "site", feedbacks: []},
    ]
    let onChangeFunction: Set<Listener> = new Set<Listener>()

    export function OnSubjectsChanged(onChanged: (subjects: Array<Subject>) => void) {
        onChangeFunction.add(onChanged)
        onChanged(subjects)
    }

    export function RemoveListener(onChanged: (subjects: Array<Subject>) => void) {
        onChangeFunction.delete(onChanged)
    }


    export function SetFeedbackReaction(newReaction: Reaction, feedback: FeedbackModel) {
        const subject = subjects.find(s => s.name === feedback.subject)
        if (subject === undefined) return;

        const savedFeedback = subject.feedbacks.find(f=> f.id=== feedback.id)
        if (savedFeedback === undefined) return ;
        savedFeedback.reaction = newReaction

        subjects= subjects.slice()
        updateListeners()
    }

    function updateListeners() {
        onChangeFunction.forEach(callback => callback(subjects))
    }

    let number = 0
    export function SendFeedback(feedback: { subject: string, content: string }) {
        const filledFeedback: FeedbackModel = new FeedbackModel(
            "#"+number,
            feedback.subject,
            feedback.content,
            "Nigger"
        )
        number++;
        const subject: (Subject | undefined) = subjects.find(value => value.name === filledFeedback.subject)
        if (subject !== undefined) {
            subject.feedbacks.push(filledFeedback)
            updateListeners()
        }
    }
}