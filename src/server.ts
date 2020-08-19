import app from './controllers/app'

const port = 3000

app.listen(port, function () {
  console.log(`Converter app is listening on port ${port}`)
})

process.on('SIGINT', () => {
  console.info("Converter app interrupted")
  process.exit(0)
})
