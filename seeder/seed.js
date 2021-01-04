const faker = require('faker');
const fs = require('fs');
const path = require('path');

const content_dir = '../content';
const locale_dirs = ['/ru', '/en', '/es'];

const createDir = (dirPath) => {
  fs.mkdirSync(dirPath, {recursive:true}, (error) => {
    if(error) {
      console.error('An error occured: ', error);    
    } else {
      console.log('Created dir ' + process.cwd() + dirPath)
    }
  });
}

const createFile = (filePath, fileContent) => {
  fs.writeFile(filePath, fileContent, (error) => {
    if(error) {
      console.error('An error occured: ', error);
    } else {
      console.log('Created file ' + filePath)
    }
  })
}

const generateMD = () => {

  const fileContents = `---
title: "${faker.lorem.words()}"
date: "${faker.date.past()}"
---
${faker.lorem.sentence()}`

return fileContents;
}

const generateFileName = () => {
  const d = faker.date.past()
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  return `${da}-${mo}-${ye}.md`;
}

if (fs.existsSync(content_dir)) {
  fs.rmdirSync(content_dir, { recursive: true });
}

locale_dirs.forEach((locale_dir) => {
  const dirPath = path.join(__dirname, content_dir, locale_dir, 'posts')
  createDir(dirPath);
});




/*
var locale_dirs = ['/ru', '/en', '/es']
var x_posts = 3

dir = path.join(__dirname, dir)

if (fs.existsSync(dir)) {
    fs.rmdirSync(dir, { recursive: true });
}

createDir(dir);

locale_dirs.forEach(
  function(locale) {
    var locale_dir = path.join(dir, locale)
    console.log('Create dir ' + locale_dir)
    createDir(locale_dir)
  }
) 

for (var i = 0; i < x_posts; i++) {
  locale_dirs.forEach(
    generateMD
  )  
}

function createDir(dir) {
  var locale_dir = dir + '/posts'
  fs.mkdir(locale_dir, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log("New directory successfully created.")
    }
})
}
*/