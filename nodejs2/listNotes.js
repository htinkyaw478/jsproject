const fs = require('fs');
const path = require('path');

function listNotes() {
    const notesDir = path.join(__dirname, 'note-app');
    const files = fs.readdirSync(notesDir);
    console.log(files)
    if (files.length === 0) {
        console.log('No notes available.');
    } else {
        console.log('Your notes:');
        files.forEach(file => {
            console.log(`- ${path.basename(file, '.txt')}`);
        });
    }
}

module.exports = listNotes;
