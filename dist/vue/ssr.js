const fs = require('fs')
const app = require('./app')
const template = fs.readFileSync('./ssr-template.html', 'utf-8')
const renderer = require('vue-server-renderer').createRenderer()

renderer.renderToString(app, (err, res) => {
  const output = template.replace('<!-- OUTPUT -->', res)
  fs.writeFileSync('./ssr.html', output)
})
