import express, {Request, Response} from 'express'
import {
  isValidRomanNumerals,
  isValidRepetitions,
  isValidForSubtraction,
  calculateArabicValue,
} from '../services/converter'

const app: express.Application = express()

app.get('/', function (req: Request, res: Response) {
  let input = req.query["roman"]
  if (!input || typeof input != "string"){
    res.status(400).send("Query string parameter called “roman” is missing")
    return
  }

  input = input.toUpperCase()
  if (!isValidRomanNumerals(input)){
    res.status(400).send("Invalid roman numeral symbol found: only V L D I X C M are in use")
    return
  }

  if (!isValidRepetitions(input)){
    res.status(400).send("Invalid roman numerals repetitions: " +
      "V L D: cannot repeat; " +
      "I X C M: can repeat max 3 in a row"
    )
    return
  }

  if (!isValidForSubtraction(input)){
    res.status(400).send("Smallest numeral placed before bigger cannot repeat and it can be one of: I X C M")
    return
  }

  const result = calculateArabicValue(input)
  res.status(200).send(result.toString())

})

export default app
