const createNote = require('./createNote');
const readNote = require('./readNote');
const deleteNote = require('./deleteNote');
const listNotes = require('./listNotes');
const appendNote = require('./appendNote');

const node = process.argv[0];
const app = process.argv[1]; //note app file name 
const action = process.argv[2]; //create or delete or list or read or append
const title = process.argv[3];
const content = process.argv[4];
// console.log("node: ", node)
// console.log("file name: ", app)
// console.log("action: ", action)
// console.log("title: ", title)
// console.log("content: ", content)

switch (action) {
    case 'create':
        createNote(title, content);
        break;
    case 'append':
        appendNote(title, content);
        break;
    case 'read':
        readNote(title);
        break;
    case 'delete':
        deleteNote(title);
        break;
    case 'list':
        listNotes();
        break;
    default:
        console.log('Unknown action');
}
