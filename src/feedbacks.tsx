import {Subject} from "./comonnents/home/home";
import {FeedbackModel} from "./models/FeedbackModel";
import {Reaction} from "./models/Reaction";
import {SocketIO} from "./socketIO/events";

export namespace Feedbacks {
    let subjects: Map<string, Subject> = new Map<string, Subject>()
    const socketIo = new SocketIO()

    export function OnSubjectsChanged(onChanged: (subjects: Array<Subject>) => void) {
        socketIo.onSubjectsChanged(newSubjects => {
            newSubjects.forEach(subject => subjects.set(subject.name,subject))
            onChanged(Array.from(subjects.values()))
        })
    }

    export function RemoveListener(onChanged: (subjects: Array<Subject>) => void) {
        console.log("Remove Listeners")
        socketIo.removeListenerToSubjectChanged()
    }

    export function SetFeedbackReaction(newReaction: Reaction, feedback: FeedbackModel) {
        const newFeedback = new FeedbackModel(feedback.id, feedback.subject, feedback.content, feedback.writerNickname)
        newFeedback.reaction = newReaction
        socketIo.upsetFeedback(newFeedback)
    }


    export function SendFeedback(feedback: { subject: string, content: string }) {
        const filledFeedback: FeedbackModel = new FeedbackModel(
            undefined,
            feedback.subject,
            feedback.content,
            "Nigger"
        )
        socketIo.upsetFeedback(filledFeedback)
    }
}