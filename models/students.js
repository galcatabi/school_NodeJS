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
        const students = req.body;
        const newStudent = {
            id_student: students.id_student,
            id_course: {
                [students.id_course]: {
                    score: students.score
                }
            },
        }
        for (let student of students) {
            if (!students[newStudent.id_student]) {
                students[student.id_student] = newStudent;
            }
            allStudents.push(students[student.id_student]);
            this.setData(allStudents);
            this.setData(student);
            res.send({ "sucess": true });
            return;
        }
        res.send({ "faild": true });
    }

    // addStudent(req, res, next){
    //     // function addCourseToStudent(studentName,course){
    //         var newStudent = this.getData(this.filenameStudents);
    //         newStudent.push({
    //             id_student : req.body.id_student,
    //             id_course : req.body.id_course,
    //             id_course : req.body.score

    //         });


    //         // const students = this.getData();
    //         console.log(students)
    //         for(let student of students){
    //             if(student.id == studentName){
    //                 if(student.courses.indexOf(course) == -1){
    //                     student.courses.push(course)
    //                 }
    //                 break;
    //             }
    //         }

    //         var setNewStudent = this.setData(newCourse);       
    //         res.send(setNewStudent);
    // }


    OutstandingStudents() {
        var allList = this.getData();
        // var value = allList.
        Object.values(allList.id_student)
        console.log(allList.id_student)
        console.log("baba")



    }

    getStudentInCourse(req, res, next) {
        var students = this.getData();
        var studentsInCourse = [];

        for (let student of students) {
            console.log(req.params)
            if (student.id_course[req.params.course_id]) {
                studentsInCourse.push(student);
            }
        }
        res.send(studentsInCourse);

    }

    insertScoreForCourse(req, res, next) {
        const students = this.getData();
        const { id_course, id_student, score } = req.body;
        console.log(req.body);
        for (let student of students) {
            if (student.id_student == id_student) {
                if (student.id_course[id_course]) {
                    student.id_course[id_course].score = parseInt(score);
                    // console.log(student.id_course)
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

    largestAverage() {
        const students = this.getData();
        var largestAverageStudent = [];
        var highestScore = 0;
        for (let student of students) {
            var OutstandingStudents = this.average(student.id_course);
            if (OutstandingStudents > highestScore) {
                highestScore = OutstandingStudents;
                OutstandingStudents = sutdent.id_student
            }

            largestAverageStudent.push(OutstandingStudents)

        }
        res.send(largestAverageStudent);

    }

}


module.exports = Students;


