const JWT_SECRET="WALEEDISAGOODBOY";

import JWT  from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn=async(req,res,next)=>{
    try {
        const decode= JWT.verify(req.headers.authorization,JWT_SECRET);
    req.user=decode;
    next();
    } catch (error) {
       console.log({error:'authentication failed'}) ;
    }


}
export const isAdmin=async(req,res,next)=>{
    const user=await userModel.findById(req.user?._id)
    if(user?.role!==1){
        res.status(402).send({
            success:false,
            message:'UnAuthorized Acess',
        })
    }else
    next();
    
}