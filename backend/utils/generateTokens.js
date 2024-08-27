import jwt from 'jsonwebtoken'
const JWT_SECRET="ASWEDRFTVGBIO88jg65437890HKsdtfU"
const NODE_ENV="production"
const generateTokenAndSetCookie=(userID,res)=>{
    const token=jwt.sign({userID},JWT_SECRET,{
        expiresIn : '15d'
    })
    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict",
        secure:NODE_ENV!=="development"
    })

}
export default generateTokenAndSetCookie;