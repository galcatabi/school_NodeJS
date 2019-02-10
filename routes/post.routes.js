
const express = require('express')
const router = express.Router()
const post = require('../models/post.model')
const Students = require("../models/students.js");
const Courses = require("../models/courses.js");
let helper = require('../helpers/helper.js');
// let allStudentsInCourse = require('../data/allStudentsInCourse.json');
// const m = require('../helpers/middlewares')

// let posts = require('../data/posts.json')
// const filename = './data/posts.json'

module.exports = function (router) {

    const _students = new Students();
    const _courses = new Courses();

    router.get('/getStudent', _students.getStudents.bind(_students) );
    router.get('/getCourses', _courses.getCourses.bind(_courses) );
    router.get('/studnetsInCourse/:course_id', _students.getStudentInCourse.bind(_students) );
    router.get('/OutstandingStudents', _students.OutstandingStudents.bind(_students) );

    router.post('/addStudent', _students.addStudent );
    router.post('/insertScoreForCourse', _students.insertScoreForCourse.bind(_students) );
    router.post('/addCourse', _courses.addCourse.bind(_courses) );


}

