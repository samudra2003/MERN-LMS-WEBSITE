import express from 'express';
import { getUserData, getUserEnrolledCourses, purchasedCourse } from '../controllers/userController.js';

const  userRouetr = express.Router();

userRouetr.get('/data', getUserData)
userRouetr.get('/enrolled-courses',getUserEnrolledCourses)
userRouetr.post('/purchase',purchasedCourse)

export default userRouetr;