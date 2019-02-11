const { setJson, getJson } = require("../helpers/helper");

class Students {

    constructor() {
        this.filenameStudents = '../data/students';
    }

    getData() {
        return getJson(this.filenameStudents);
    }

    getStudents(req, res, next) {
        res.send(JSON.stringify(this.getData()));
    }

    setData(data) {
        setJson(this.filenameStudents, data);
    }

    setStudents(req, res, next) {
        res.send(JSON.stringify(this.setData()));
    }

    addStudent(req, res, next) {
        const allStudents = this.getData();
        const reqBody = req.body;
        const newStudent = {
            id_student: reqBody.id_student,
            id_course: {}
        }

        newStudent[reqBody.id_course] = {
            score: reqBody.score
        }
        for (let student of students) {
            if (student.id_student != newStudent.id_student) {
                allStudents.push(newStudent);
            }
            this.setData(allStudents);
            res.send({ "sucess": true });
            return;
        }
        res.send({ "faild": true });
    }

    getStudentInCourse(req, res, next) {
        var students = this.getData();
        var studentsInCourse = [];

        for (let student of students) {
            console.log(req.params)
            if (student.id_course[req.params.course_id]) {
                studentsInCourse.push(student.id_student);
            }
        }
        res.send(studentsInCourse);

    }

    addMoreCourseForStudent(req, res, next) {
        const allStudents = this.getData();
        const { id_course, id_student, score } = req.body;
        const reqBody = req.body;
        const newCours = {
            [reqBody.id_course]: {
                score: reqBody.score
            }
        }
        for (let student of allStudents) {
            if (student.id_student == id_student && student.id_course != id_course) {
                allStudents[student.id_student] = newCours;
            }

            this.setData(allStudents);
            this.setData(student);
            res.send({ "sucess": true });
            return;
        }


    }

    insertScoreForCourse(req, res, next) {
        const students = this.getData();
        const { id_course, id_student, score } = req.body;
        console.log(req.body);
        for (let student of students) {
            if (student.id_student == id_student) {
                if (student.id_course[id_course]) {
                    student.id_course[id_course].score = parseInt(score);
                    this.setData(students);
                    res.send({ "sucess": true });
                    return;

                }
                break;
            }
        }
        res.send({ "faild": true });

    }

    average(id_course) {
        var total = 0;

        for (let courseKey in id_course) {
            total += id_course[courseKey].score;
        }
        var numberOfKeys = Object.keys(id_course).length;
        var avg = total / numberOfKeys;

        return avg;
    }

    allStudentsAbove90Average(req, res, next) {
        const students = this.getData();
        var above90Average = []
        for (let student of students) {
            if (this.average(student.id_course) > 90) {
                above90Average.push(student.id_student)
            }
        }
        res.send(above90Average);
    }

    largestAverage(req, res, next) {
        const students = this.getData();
        var largestAverageStudent = [];
        var highestScore = 0;
        var maxAverageStudent = '';
        for (let student of students) {
            var OutstandingStudents = this.average(student.id_course);
            if (OutstandingStudents > highestScore) {
                highestScore = OutstandingStudents;
                maxAverageStudent = student.id_student;
            }
        }
        res.send(maxAverageStudent);

    }

}


module.exports = Students;


