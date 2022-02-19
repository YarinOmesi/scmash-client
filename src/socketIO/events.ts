import {io as socketIO,Socket} from "socket.io-client";
import {Subject} from "../comonnents/home/home";
import {FeedbackModel} from "../models/FeedbackModel";

export class SocketIO {
    private io:Socket = socketIO("http://192.168.91.128:5000")

    onSubjectsChanged(onSubjectsChanged:(subjects:Array<Subject>) => void ){
        console.log("Register Listener")
        this.io.on("subject",(subjects:Array<Subject>)=>{
            onSubjectsChanged(subjects)
        })
    }
    removeListenerToSubjectChanged(){
        this.io.off("subject")
    }
    upsetFeedback(feedback:FeedbackModel){
        this.io.emit('feedback',feedback)
    }

}