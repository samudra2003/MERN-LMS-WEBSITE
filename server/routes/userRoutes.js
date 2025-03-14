import express from 'express';
import { addUserRating, getUserCourseProgress, getUserData, getUserEnrolledCourses, purchasedCourse, updateCourseProgress } from '../controllers/userController.js';

const  userRouetr = express.Router();

userRouetr.get('/data', getUserData)
userRouetr.get('/enrolled-courses',getUserEnrolledCourses)
userRouetr.post('/purchase',purchasedCourse)

userRouetr.post('update-course-progress',updateCourseProgress)
userRouetr.post('/get-course-progress',getUserCourseProgress)
userRouetr.post('/add-rating',addUserRating)

export default userRouetr;