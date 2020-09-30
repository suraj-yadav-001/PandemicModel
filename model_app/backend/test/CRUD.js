var express = require('express')
var app = express()
var path = require('path')

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)

app.route('/home')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'))
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.json({"a": "book", "b": "banana"})
  })

  app.delete('/', (req, res) => {
  res.send("DELETE Request")
})

/*Other commands
  res.download()	Prompt a file to be downloaded.
  res.end()	End the response process.
  res.redirect()	Redirect a request.
  res.render()	Render a view template.
  res.sendStatus()
*/
