var chalk = require('chalk')
var JsDiff = require('diff')
var sass = require('node-sass')
var fs = require('fs')
sass.render({
  file: 'sass/main.scss'
}, function(err, result) {

  if (err === null) {
    printDiff(JsDiff.diffCss(fs.readFileSync("sass/main.css").toString("utf-8"), result.css.toString()))
    fs.writeFileSync('sass/main.css', result.css)
  } else {
    console.error(err)
  }
})

function printDiff(diff) {
  diff.forEach((part) => {
    if (part.added) {
      console.log(chalk.green('%s'), "+ " + part.value)
    } else if (part.removed) {
      console.log(chalk.red('%s'), "- " + part.value)
    }
  })
}
