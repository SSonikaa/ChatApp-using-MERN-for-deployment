import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiversocketId ,io} from '../socket/socket.js';
export const sendMessage = async (req,res)=>{
 try{
    const {message} =req.body;
    const {id:recieverId}= req.params;
    const senderId= req.user._id
    let conversation = await Conversation.findOne({
        participants: {$all: [senderId,recieverId]},
    })
    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId,recieverId]
        })
    }
    const newMessage = new Message({
        senderId,
        recieverId,
        message,
    })
    if(newMessage){
        conversation.messages.push(newMessage._id)
    }
    // awaitconversation.save();
    // awaitnewMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]);
     //Socket
     const receiverSocketId= getReceiversocketId(recieverId);
     if(receiverSocketId){
        io.to(receiverSocketId).emit("newMessage",newMessage)
     }


    res.status(201).json(newMessage )
    
 }catch(error){
   console.log ("error in sendmessage controller",error.message)
   res.status(500).json({error : "internal server error"})
 }
}
export const getMessage=async(req,res)=>{
    try {
        const {id: usertochatid}= req.params
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all: [senderId,usertochatid]},
        }).populate("messages");
         if(!conversation){ return res.status(200).json([])}
         const messages= conversation.messages;
        res.status(200).json(messages)
        
    } catch (error) {
        console.log("error in getmessage controller", error.message)
   res.status(500).json({error : "internal server error"})
    }
}