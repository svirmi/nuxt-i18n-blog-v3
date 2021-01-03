var faker = require('faker')
var fs = require('fs')
var path = require('path')

var dir = '../dist/md'

if (fs.existsSync(dir)) {
    fs.rmdirSync(dir, { recursive: true });
}

fs.mkdir(dir, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log("New directory successfully created.")
    }
  })

for (var i = 0; i < 10; i++) {
  generateMD()
}

function generateMD () {
  var fileName = faker.lorem.word() + '-' + faker.lorem.word()
  var fileContents = `---
title: "${faker.lorem.words()}"
date: "${faker.date.past()}"
---
${faker.lorem.sentence()}
`
  var outputPath = path.join(__dirname, dir, `${fileName}.md`)

  fs.writeFile(outputPath, fileContents, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(outputPath + ' file generated')
  })
}