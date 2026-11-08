const fs = require('fs');
const path = require('path');
function createNote(title, content) {
    if (!title || !content) {
        console.log('Title and content are required.');
        return;
    }
    // check folder is exist or not
    if (!fs.existsSync(path.join(__dirname, 'note-app'))) {
        fs.mkdirSync(path.join(__dirname, 'note-app'));
    }
    // check file is exist or not
    if (fs.existsSync(path.join(__dirname, 'note-app', `${title}.txt`))) {
        console.log(`Note '${title}' already exists.`);
        return;
    }
    const filePath = path.join(__dirname, 'note-app', `${title}.txt`);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Note '${title}' created.`);
}
module.exports = createNote;
