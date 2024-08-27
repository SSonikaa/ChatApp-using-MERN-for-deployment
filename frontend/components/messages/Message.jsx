import React from 'react';
import './Message.css';
import { useAuthContext } from '../../src/context/AuthContext';
import useConversation from '../../src/Zustand/useConversation';
import { extractTime } from '../../src/utils/extractTime';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-200";
    
    const shakeClass = message.shouldShake? "shake":" "
    
    return (
        <div className={`chat-container ${chatClassName}`}>
            {!fromMe && (
                <div className="chat-image">
                    <div className="avatar">
                        <img alt="Avatar" src={profilePic} />
                    </div>
                </div>
            )}
            
            {fromMe && (
                <div className="chat-image">
                    <div className="avatar">
                        <img alt="Avatar" src={profilePic} />
                    </div>
                </div>
            )}
            <div className={`chat-bubble  text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div>
    );
};

export default Message;





// import React from 'react';
// import './Message.css';
// import { useAuthContext } from '../../src/context/AuthContext';
// import useConversation from '../../src/Zustand/useConversation';
// import { extractTime } from '../../src/utils/extractTime';
// const Message = ({ message }) => {
//     const { authUser } = useAuthContext();
//     const { selectedConversation } = useConversation();
//     const fromMe = message.senderId === authUser._id;
//     const formattedTime = extractTime(message.createdAt);
//     const chatClassName = fromMe ? "chat-end" : "chat-start";
//     const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
//     const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    
//     return (
//         <div className={chat-container ${chatClassName}}>
//             {!fromMe && (
//                 <div className="chat-image">
//                     <div className="avatar">
//                         <img alt="Avatar" src={profilePic} />
//                     </div>
//                 </div>
//             )}
//             {/* <div className="chat-bubble">{message.message}</div> */}
//             {fromMe && (
//                 <div className="chat-image">
//                     <div className="avatar">
//                         <img alt="Avatar" src={profilePic} />
//                     </div>
//                 </div>
//             )}
//             <div className={chat-bubble text-white ${bubbleBgColor}}>{message.message}</div>
// 			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
//         </div>
//     );
// };

// export default Message