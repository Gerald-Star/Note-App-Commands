import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  //? make a command yargs to create a new note
  .command('new <note>', 'create a new note', yargs => {
    return yargs.positional('note', {
      describe: 'The content of the note you want to create',
      type: 'string'
    })
  }, async (argv) => {

  })
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })
  .command('all', 'get all notes', () => { }, async (argv) => {

  })
  .command('find <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {

  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {

  })
  .command('web [port]', 'launch website to see notes', yargs => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
  }, async (argv) => {

  })
  .command('clean', 'remove all notes', () => { }, async (argv) => {

  })
  
  //? make a command for saying hello
  //.command('hello', 'say hello', () => { }, (argv) => { console.info('Hello!')} ) 
  
  //? make a command for adding two numbers
  //.command('add <a> <b>', 'add two numbers', () => { }, (argv) => {
  //  console.info(argv.a + argv.b)})

  //? make a command for fetching the contents of a URL
  //.command('curl <url>', 'fetch the contents of the URL', () => { }, (argv) => {
  //  console.info(argv)})

  //? make a command for creating a new Note
  //.command('new <note>', 'create a new note', () => { }, (argv) => {
  //  console.info(argv)})

  //? make a command for listing the contents of a directory
  //.command('ls <dir>', 'list the contents of a directory', () => { }, (argv) => {
  //  console.info(argv)})

  //? make a command for creating a new component
  //.command('component <name>', 'create a new component', () => { }, (argv) => {
  //  console.info(argv)})

  //? make a command for creating a new page
  //.command('page <name>', 'create a new page', () => { }, (argv) => {
   // console.info(argv) })
  .demandCommand(1) // You need at least one command before yargs will do anything
  .parse()