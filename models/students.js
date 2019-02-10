const {setJson,getJson} =  require("../helpers/helper");

class Students {

    constructor(){
        this.filenameStudents = '../data/students';
    }

    getData(){
        return getJson(this.filenameStudents);
    }

    getStudents(req, res, next){
        res.send(JSON.stringify(this.getData()));
    }

    

    setData(data){
         setJson(this.filenameStudents,data);
    }

    // setStudents(req, res, next){
    //     res.send(JSON.stringify(this.setData()));
    // }    


    addStudent(req, res, next){
        // function addCourseToStudent(studentName,course){
            var newStudent = this.getData(this.filenameStudents);
            newStudent.push({
                id_student : req.body.id_student,
                id_course : req.body.id_course,
                id_course : req.body.score

            });


            // const students = this.getData();
            console.log(students)
            for(let student of students){
                if(student.id == studentName){
                    if(student.courses.indexOf(course) == -1){
                        student.courses.push(course)
                    }
                    break;
                }
            }

            var setNewStudent = this.setData(newCourse);       
            res.send(setNewStudent);
    }
    

    OutstandingStudents(){
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

    insertScoreForCourse (req, res, next){
        const students = this.getData();
        const {id_course, id_student, score} = req.body;
        for(let student of students){
            if(student.id_student == id_student){
                 if(student.id_course[id_course]){
                    student.id_course[id_course].score = score;
                    this.setData(students); 
                    res.send({"sucess":true});
                    return;

                 }
                break;
            }
        }
        res.send({"faild":true});
        
    }

}


module.exports = Students;


// function avrage(course_id){
//     for course_id
// }



// var allsstudentsAbove90 = []
// let student in students{
//     if(avrage(student.course_id) > 90){
//         allsstudentsAbove90.push(student)
//     }
// }