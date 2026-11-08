const fs = require('fs');
const path = require('path');

function readNote(title) {
    const filePath = path.join(__dirname, 'note-app', `${title}.txt`);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        console.log(`Content of '${title}':\n${content}`);
    } else {
        console.log(`Note '${title}' does not exist.`);
    }
}

module.exports = readNote;
