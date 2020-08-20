
const romanNumeralsValues : {[c: string]: {val:number, maxRepeat: number, ifSubtrahend: boolean}} = {
  'I': {val: 1, maxRepeat: 3, ifSubtrahend: true},
  'V': {val: 5, maxRepeat: 1, ifSubtrahend: false},
  'X': {val: 10, maxRepeat: 3, ifSubtrahend: true},
  'L': {val: 50, maxRepeat: 1, ifSubtrahend: false},
  'C': {val: 100, maxRepeat: 3, ifSubtrahend: true},
  'D': {val: 500, maxRepeat: 1, ifSubtrahend: false},
  'M': {val: 1000, maxRepeat: 3, ifSubtrahend: true}
}

export function isValidRomanNumerals(input: string) {
  for (const symbol of input) {
    if(!romanNumeralsValues[symbol]){
      return false
    }
  }
  return true
}

export function isValidRepetitions(input:string){
  // V L D: cannot repeat; I X C M: can repeat max 3 in a row
  if (input.length === 1){
    return true
  }
  let previousNumeral = input[0]
  let maxRepeat = 1
  for (let i=1; i<input.length; i++){
    if(previousNumeral === input[i]){
      maxRepeat ++
    }
    else {
      if (maxRepeat > romanNumeralsValues[previousNumeral].maxRepeat){
        return false
      }
      maxRepeat = 1
      previousNumeral = input[i]
    }
  }
  if (maxRepeat > romanNumeralsValues[previousNumeral].maxRepeat){
    return false
  }
  return true
}

export function isValidForSubtraction(input:string){
  //smallest numeral placed before bigger cannot repeat and it can be one of: I X C M
  if (input.length === 1){
    return true
  }
  let previousNumeral = input[0]
  let maxRepeat = 1
  for (let i=1; i<input.length; i++){
    if(previousNumeral === input[i]){
      maxRepeat ++
    }
    else {
      if(romanNumeralsValues[previousNumeral].val < romanNumeralsValues[input[i]].val){
        return !!((maxRepeat === 1) && romanNumeralsValues[previousNumeral].ifSubtrahend)
      }
      maxRepeat = 1
      previousNumeral = input[i]
    }
  }
  return true
}

export function calculateArabicValue(input: string){
  if (input.length === 1){
    return romanNumeralsValues[input[0]].val
  }
  let result = 0
  for(let i=0; i<(input.length-1 ); i++){
    if(romanNumeralsValues[input[i]].val < romanNumeralsValues[input[i+1]].val){
      result -= romanNumeralsValues[input[i]].val
    }
    else {
      result += romanNumeralsValues[input[i]].val
    }
  }
  result += romanNumeralsValues[input[input.length-1]].val
  return result
}
