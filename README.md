# Roman-arabic converter

Microservice for converting Roman Numerals to Arabic Numbers


## Roman Numerals rules supported:

- in use: M D C L X V I symbols
- repetitions rules:
  - V L D: cannot repeat
  - I X C M: can repeat max 3 in a row
- smallest numeral placed before bigger cannot repeat and it can be one of: I X C M


## API specification:

- Method GET
- Route root such as localhost:3000/
- Input Query String Parameter called “roman”
- Output Plain String (output is calculated from the input. The input is Roman Numeral which is converted to Arabic Number)


## Deployment requirements:

- NodeJs
- Docker


## Deployment:

- `docker build . --tag converter`
- `docker run -it -p 3000:3000 converter`


## Development:

- `npm run build` - Compile Typescript to Javascript
- `node src/server.js` - Run locally
- `npm run test:watch` - Run watch mode for tests
