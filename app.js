
// const sta = require('./util.js')
// const tu = sta(89, 10)
// console.log(tu);

// //const validator = require('validator')
// const fu = require('./util.js')
//  const str = fu()
//  console.log(str)

//  console.log(validator.isEmail('namespace.com'))
//  console.log(validator.isURL('https:/hemluubabu.in.docomo.ioi.sda.as.af.dsas'))



// const set = chalk.blue.bold.italic
// console.log('Hii!'+chalk.bold(' hui hui ')+chalk.bold.red("Its Working"))
// console.log(chalk.bgRed.inverse("Success!"))
// console.log(chalk.bgRed("Success!"))

// console.log(chalk.redBright("Success!"))

// console.log(chalk.blue("Success!"))
// console.log(chalk.green('magikk'))


// coustomize yargs
//console.log(process.argv)
//3 Arguments

// console.log(process.argv[2])
//const command = process.argv[2]

//console.log(process.argv) // one more argument
 
// if(command=='add')
// {
//     console.log('Tes')
// }
// else 
// {
//     console.log('Nahh')
// }


//add, remove, read, list

//create add command


const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { demandOption } = require('yargs')

//const { command, describe, demandOption } = require('yargs')

yargs.version('2.1.0')


yargs.command({
    command: 'add',
    describe : 'Add a new note',
    builder : {
        title :
        {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body:{
            describe : 'body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {notes.addNote(argv.title, argv.body)}
})

//remove command
yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    builder:{
        title: 
        {
            describe : 'Note title to be deleted',
            demandOption : true ,
            type : 'string'
        }
    },
    handler(argv) {notes.removeNote(argv.title)}
})

//list command
yargs.command({
    command: 'list',
    describe : 'List notes',
    handler() {notes.listNote()}
})

yargs.command({
    command: "read",
    describe: 'Read notes',
    builder:{
        title:
        {
            describe : 'Note title to read',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) { notes.readNote(argv.title)}
})
yargs.parse()
//console.log(process.argv) 
//console.log(yargs.argv) 
console.log(chalk.red('akjh'))