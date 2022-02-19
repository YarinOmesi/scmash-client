import {Reaction} from "./Reaction";

export class FeedbackModel {
    id: (string|undefined);
    content: string;
    writerNickname: string;
    subject: string;
    reaction: Reaction;

    constructor(id:(string|undefined),subject: string, content: string, writerNickname: string) {
        this.id = id;
        this.content = content;
        this.writerNickname = writerNickname;
        this.subject = subject;
        this.reaction = Reaction.NoReaction;
    }


}