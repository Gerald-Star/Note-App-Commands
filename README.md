# Creating a Crude Notes using Node.JS V3

Node JS ia a Javascript runtime environment. It runs on the operating system environment while the Javascript runs on the browser environment.

## Node.JS Development Setup/Installation

## Step by Step Process

3. Creating an abstraction to CRUD the notes
   CRUD stands for Create, Read, Update and Read
   CRUD operations refer to the basic functions that can be performed on the notes in the database.

- **Create**: This operation involves adding a new note to the database. It can be done by providing the necessary information about the note, such as its title, content, and any relevant tags.
- **Read**: This operation involves retrieving an existing note from the database. It can be done by searching for the note by its title, content, or tags.
- **Update**: This operation involves modifying an existing note in the database. It can be done by changing the values of the note's attributes, such as its title, content, or tags.
- **Delete**: This operation involves removing an existing note from the database. It can be done by searching for the note by its title, content, or tags, and then deleting it.

By using these CRUD operations, users can easily manage their notes in the JSON file database.


### Node.js Documentation



## Creating a CLI on Node using npm link

- install npm link

check with  - which note

Let’s start by creating a command we can use in our terminal. To do that, we have to register a command name in a package.json:
{
  "name": "note",
  "bin": {
    "note": "./index.js"
  }
}

set this on top of your script
#!/usr/bin/env node

- run note to start your CLI


### fs in Node

fs ia a built-in function in Node. You can use fs to read files
Examples
 const data = fs.writeFilesync()
 const http
 Othe buitl-in functions in Node


- Node version manager -nvm
https://github.com/nvm-sh/nvm



## Node Process

### Browser vs Node.js

#### Global Object

difference between how JS wrks in the browser and in Node.js

in JS the global object is window, while in Node.js it is global

Example:
Global object in JS-  console.log(window);
Global object in Node.js console.log(global);



Course materials

https://scottmoss.notion.site/Intro-to-Node-js-V3-7c8e4ccaebf94b839f425fff13dcc44c