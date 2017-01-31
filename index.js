var drop = require('drag-and-drop-files')
var reader = require('filereader-stream')
var concat = require('concat-stream')
var tar = require('tar-stream')
var gunzip = require('gunzip-maybe')

drop(window, function (files) {
  reader(files[0]).pipe(gunzip()).pipe(tar.extract())
    .on('entry', function (entry, stream, next) {
      console.log(entry.name)
      next()
    })
})
