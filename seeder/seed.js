var faker = require('faker')
var fs = require('fs')
var path = require('path')

var dir = '../content'

var locale_dirs = ['ru', 'en', 'es']
var n_posts = 10

dir = path.join(__dirname, dir)

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

for (var i = 0; i < n_posts; i++) {
  generateMD()
}

function generateMD () {
    const d = faker.date.past()
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    var fileContents = `---
title: "${faker.lorem.words()}"
date: "${faker.date.past()}"
---
${faker.lorem.sentence()}`

    var outputPath = path.join(dir, `${da}-${mo}-${ye}.md`)

    fs.writeFile(outputPath, fileContents, function (err) {
        if (err) {
        return console.log(err)
        }
    console.log(outputPath + ' file generated')
  })
}