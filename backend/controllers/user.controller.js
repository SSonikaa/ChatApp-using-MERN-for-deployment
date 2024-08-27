import User from '../models/user.model.js'
export const getuserforsidebar = async(req,res)=>{

    try {
        const loggedinuserid=req.user._id;
        const filtereduser = await User.find({_id:{$ne:loggedinuserid}})
        res.status(200).json(filtereduser)
    } catch (error) {
        console.log("error in userfor sidebar controller", error.message)
   res.status(500).json({error : "internal server error"})
    }
}