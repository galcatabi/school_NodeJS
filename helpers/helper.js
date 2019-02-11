const fs = require('fs');
const path = require('path');



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



module.exports = { setJson, getJson }