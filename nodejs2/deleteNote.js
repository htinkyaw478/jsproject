const fs = require('fs');
const path = require('path');

function deleteNote(title) {
    const filePath = path.join(__dirname, 'note-app', `${title}.txt`);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Note '${title}' deleted.`);
    } else {
        console.log(`Note '${title}' does not exist.`);
    }
}

module.exports = deleteNote;
