const path    = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const multer  = require('multer')

const app = express()
const port = process.env.PORT || 8000
const upload = multer({ dest: 'public/uploads/'})

app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public/img/favicon.ico')))

app.post('/result', upload.single('uploadfile'), (req, res) => {
	console.log(req.body, req.file)

	res.send({
		size: req.file.size
	})
})

app.listen(port, () => {
	console.log('Listening at port', port)
})
