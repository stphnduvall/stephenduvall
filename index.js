var sass = require('node-sass')
var fs = require('fs')
sass.render({
  file: 'sass/main.scss'
}, function(err, result) {

  if (err === null) {
    fs.writeFileSync('sass/main.css', result.css)
  } else {
    console.error(err)
  }
})
