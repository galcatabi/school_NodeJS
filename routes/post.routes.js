
const express = require('express')
const router = express.Router()
const Students = require("../models/students.js");
const Courses = require("../models/courses.js");
let helper = require('../helpers/helper.js');



module.exports = function (router) {

    const _students = new Students();
    const _courses = new Courses();

    router.get('/getStudent', _students.getStudents.bind(_students));
    router.get('/getCourses', _courses.getCourses.bind(_courses));
    router.get('/studnetsInCourse/:course_id', _students.getStudentInCourse.bind(_students));
    router.get('/Above90Average', _students.allStudentsAbove90Average.bind(_students));
    router.get('/largestAverage', _students.largestAverage.bind(_students));

    
    router.post('/addStudent', _students.addStudent.bind(_students));
    router.post('/insertScoreForCourse', _students.insertScoreForCourse.bind(_students));
    router.post('/addMoreCourseForStudent', _students.addMoreCourseForStudent.bind(_students));


    
    router.post('/addCourse', _courses.addCourse.bind(_courses));

}

