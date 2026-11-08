const fs = require('fs');
const path = require('path');

function appendNote(title, content) {
    const filePath = path.join(__dirname, 'note-app', `${title}.txt`);
    if (fs.existsSync(filePath)) {
        fs.appendFileSync(filePath, `\n ${content}`, 'utf8');
        console.log(`Note '${title}' append file.`);
    } else {
        console.log(`Note '${title}' does not exist.`);
    }
}

module.exports = appendNote;
