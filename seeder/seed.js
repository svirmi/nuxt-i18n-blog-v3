const faker = require('faker');
const fs = require('fs');
const path = require('path');

const content_dir = '../content';
const locale_dirs = ['/ru/articles', '/en/articles', '/es/articles'];
const x_posts = 23; // how many posts for each locale

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
  const date = faker.date.past()
  const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const m = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
  const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

  return `${d}-${m}-${y}.md`;
}

const generateTags = () => {
  const max_tags = 3; // max number of tags to generate
  const n_tags = Math.floor(Math.random() * max_tags) + 1; // random integer between 1 and max_tags 
  const tags = faker.random.words(n_tags).toLowerCase().split(' ').map(s => `'${s}'`).join(', ');
  return tags;
}

const generateMD = (locale_dir) => {

const fileContents = `---
title: "(${locale_dir}) :: ${faker.lorem.words()}"
date: "${faker.date.past().toISOString()}"
description: "${faker.lorem.paragraphs(2)}"
image: 'https://res.cloudinary.com/redfern-web/image/upload/v1599840408/redfern-dev/png/nuxt.png'
tags: [{{tags}}]
published: "${faker.date.past().toISOString()}"
---
<div class="bg-blue-800 text-white p-4 mb-4">
${faker.lorem.sentence()}
</div>  

${faker.lorem.paragraph()}  
![${faker.random.word()}](${faker.random.image()})  
${faker.lorem.paragraphs(3)}  `  

const tags = generateTags();

return fileContents.replace("{{tags}}", tags);
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