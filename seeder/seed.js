const faker = require('faker');
const fs = require('fs');
const path = require('path');

const content_dir = '../content';
const locale_dirs = ['/ru/posts', '/en/posts', '/es/posts'];
const x_posts = 4; // how many posts for each locale

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

const generateFileName = () => {
  const d = faker.date.past()
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  return `${da}-${mo}-${ye}.md`;
}

const generateMD = (locale_dir) => {

const fileContents = `---
title: "${locale_dir} @ ${faker.lorem.words()}"
date: "${faker.date.past()}"
description: "${faker.lorem.paragraph()}"
---
<div class="bg-blue-800 text-white p-4 mb-4">
${faker.lorem.sentence()}
</div>  

${faker.lorem.paragraph()}  
![${faker.random.word()}](${faker.random.image()})  
${faker.lorem.paragraphs(3)}  `  

return fileContents;
}

// re-create content dir if exists
if (fs.existsSync(path.join(__dirname, content_dir))) {
  fs.rmdirSync(path.join(__dirname, content_dir), { recursive: true });
}

// create sub-folders for each locale
locale_dirs.forEach((locale_dir) => {
  const dirPath = path.join(__dirname, content_dir, locale_dir);
  createDir(dirPath);
});

// generate and save markdown files
for (var i = 0; i < x_posts; i++) {
  const filename = generateFileName();  
  
  locale_dirs.forEach((locale_dir) => {
    const fullPath = path.join(__dirname, content_dir, locale_dir, filename);   
    const postContent = generateMD(locale_dir);     
    createFile(fullPath, postContent);
  });
} 