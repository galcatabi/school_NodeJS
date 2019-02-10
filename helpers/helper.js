const fs = require('fs');
const path = require('path');
// const getNewId = (array) => {
//     if (array.length > 0) {
//         return array[array.length - 1].id + 1
//     } else {
//         return 1
//     }
// }
// const newDate = () => new Date().toString()
// function mustBeInArray(array, id) {
//     return new Promise((resolve, reject) => {
//         const row = array.find(r => r.id == id)
//         if (!row) {
//             reject({
//                 message: 'ID is not good',
//                 status: 404
//             })
//         }
//         resolve(row)
//     })
// }

function checkFields(req, res, next) {
    const { title, content, tags } = req.body
    if (title && content && tags) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}

function setJson(filename, content) {
    fs.writeFileSync(path.join(__dirname, `${filename}.json`) , JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

function getJson(filename){
    let content = fs.readFileSync(path.join(__dirname, `${filename}.json`));  
    return JSON.parse(content);  
}

module.exports = {
    // getNewId,
    // newDate,
    // mustBeInArray,
    checkFields,
    setJson,
    getJson
}