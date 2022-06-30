const fs = require('fs')
const chalk = require('chalk')
const getNotes = function () {
    return 'Your Notes...'
}


const addNote = (title, body) => {
    const notes = loadNotes()
    // const Dupli = notes.filter((note)=>note.title===title)
    const Dupli = notes.find((note) => note.title === title)
    if (!Dupli) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green("Note has been added!"))
    }
    else {
        console.log(chalk.red("Note title has been taken"))
    }
}

const saveNotes = (notes) => {
    const dataJ = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJ)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data)

    }
    catch (e) {
        return []
    }
}

const removeNote = (title) => {
    console.log("Title : " + chalk.blue(title))
    const notes = loadNotes()
    // var i = 0
    // for (i = 0; i < notes.length; i++) {
    //     if (notes[i].title === title) {
    //         console.log("Title Found")
    //         notes.splice(i, 1);
    //         break;
    //     }
    // }
    // if (i === notes.length) { console.log("Title not Found") }
    // else {
    //     saveNotes(notes)
    // }

    const notesToKeep = notes.filter((note) => note.title != title)
    if (notesToKeep.length != notes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}
const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bgYellow("Titles of your notes :"))
    notes.forEach((note) => console.log(chalk.bgBlue(note.title)))
    // var i
    // for(i=0;i<notes.length;i++)
    // {
    //     console.log(chalk.green(notes[i].title))
    // }
}
const readNote = (title) => {
    const notes = loadNotes()
    var i
    for (i = 0; i < notes.length; i++) {
        if (notes[i].title === title) {
            console.log(chalk.green(notes[i].title))
            console.log(notes[i].body)
            break
        }
    }
    if (i === notes.length) {
        console.log(chalk.bgRed('No note found with given title!'))
    }
    // const note = notes.find((note) => note.title===title)
    // if(note)
    // {
    //     console.log(chalk.green(note.title))
    //     console.log(note.body)
    // }
    // else
    // {
    //     console.log(chalk.bgRed('No note found with given title!'))
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}