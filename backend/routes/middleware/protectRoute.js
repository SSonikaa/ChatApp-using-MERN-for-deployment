import jwt from 'jsonwebtoken'
// const JWT_SECRET="ASWEDRFTVGBIO88jg65437890HKsdtfU"
const JWT_SECRET="ASWEDRFTVGBIO88jg65437890HKsdtfU"
import User from '../../models/user.model.js'
const protectRoute = async (req,res,next)=>{
    try {
        const token= req.cookies.jwt
        if(!token){
            return res.status(401).json({error:"unauthorised - no token provided"} )
        }
        const decoded=jwt.verify(token,JWT_SECRET)
        if(!decoded){
            return res.status(401).json({error:"unauthorised - invalid token provided"})
        }
        const user = await User.findById(decoded.userID).select("-password")
        if(!user){
            console.log("Decoded token:", decoded);
            console.log("error in sendmessage try",user,)
            return res.status(404).json({error: "user not found"})
        }
        req.user=user
        next()
    } catch (error) {
        console.log("error in sendmessage protectRoute middleware",error.message)
   res.status(500).json({error : "internal server error"})
    }
}
export default protectRoute;