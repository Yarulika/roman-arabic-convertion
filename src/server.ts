import express, {Request, Response} from 'express'

import process from 'process'

import {
  isValidRomanNumerals,
  isValidRepetitions,
  calculateArabicValue,
} from './converter'

const app: express.Application = express()
const port = 3000

app.get('/', function (req: Request, res: Response) {
  let input = req.query["roman"]
  if (!input || typeof input != "string"){
    res.status(400).send("Query string parameter called “roman” is missing")
    return
  }

  input = input.toUpperCase()
  console.log("input: ",input)
  if (!isValidRomanNumerals(input)){
    res.status(400).send("Invalid roman numeral symbol found: " +
      "only V L D I X C M are in use")
    return
  }
  if (!isValidRepetitions(input)){
    res.status(400).send("Invalid roman numerals repetitions: " +
      "V L D: cannot repeat" +
      "I X C M: can repeat max 3 in a row"
      )
    return
  }

  const result = calculateArabicValue(input)
  res.status(200).send(result.toString())
})

app.listen(port, function () {
  console.log(`Converter app is listening on port ${port}`)
})

process.on('SIGINT', () => {
  console.info("Microservice interrupted")
  process.exit(0)
})
