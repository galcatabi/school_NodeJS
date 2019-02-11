const { setJson, getJson } = require("../helpers/helper");

class Courses {

    constructor() {
        this.filenameCourses = '../data/courses';
    }

    getData() {
        return getJson(this.filenameCourses);
    }

    getCourses(req, res, next) {
        res.send(JSON.stringify(this.getData()));
    }

    setData(data) {
        setJson(this.filenameCourses, data);
    }

    addCourse(req, res, next) {
        var allCourse = this.getData();
        console.log(req.body);
        const newCourse = {
            id_course: req.body.id_course,
            id_student: req.body.id_student
        }
        allCourse.push(newCourse);

        this.setData(allCourse);
        res.send(newCourse);
    }





}



module.exports = Courses;