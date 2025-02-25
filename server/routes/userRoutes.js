import express from 'express';
import { getUserData, getUserEnrolledCourses } from '../controllers/userController.js';

const  userRouetr = express.Router();

userRouetr.get('/data', getUserData)
userRouetr.get('/enrolled-courses',getUserEnrolledCourses)

export default userRouetr;