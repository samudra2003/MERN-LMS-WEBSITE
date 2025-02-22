import {clerkClient}  from "@clerk/express"


//Middleware (Protected  Educator Roles)

export const protectEducator = async (req, res, next) => {
    try {
        const userId = req.auth.userId;
        const response = await clerkClient.users.getUser(userId);

        if(response.publicMetadata.role!='educator'){
            return res.json({status:false, message:'Unauthorized Access'});
        }
        next();

    } catch(err){
         res.json({status:false, message:err.message});
    }
}
