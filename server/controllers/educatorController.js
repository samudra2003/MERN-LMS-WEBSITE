import {clerkClient}  from '@clerk/express'
import Course from '../models/Course.js';
import {v2 as cloudinary} from 'cloudinary'

//update role to educator
export const updateRoleToEducator = async(req,res)=>{
    try{
        const userId =  req.auth.userId;

        await clerkClient.users.updateUserMetadata(userId,{
            publicMetadata: {
                role: 'educator',
            }
        })
        
        res.json({success:true, message:'You can publish a course now'});

    }catch(e){
       
        res.json({success:false, message:e.message});
    }
}

//Add new course
export const addNewCourse = async(req,res)=>{
    try{
        const {courseData} = req.body;
        const imageFile = req.file;
        const educatorId = req.auth.userId;

       if(!imageFile){
        return res.json({success:false, message:'Thumbnail Not Attached'});
       }
       const parsedCourseData = await JSON.parse(courseData);
       parsedCourseData.educator = educatorId;
       const newCourse =  await Course.create(parsedCourseData)
       const imageUrl = await cloudinary.uploader.upload(imageFile.path)
       newCourse.courseThumbnail = imageUrl.secure_url;
       await newCourse.save();

       res.json({success:true, message:'Course Added Successfully'});

    }catch(err){
        res.json({success:false, message:err.message});

    }
}