var sass = require('node-sass')
var fs = require('fs')
sass.render({
  file: 'sass/main.scss'
}, function(err, result) {

  if (err === undefined) {
    fs.writeFileSync('sass/main.css', result.css)
  } else {
    console.log('Could not handle your sass')
  }
})
