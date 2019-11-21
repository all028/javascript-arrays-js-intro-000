var chocolateBars = ['snickers','hundred grand', 'kitkat','skittles']

function addElementToBeginningOfArray(paramArray, paramElement){
  //add to new array and not modify original
  copiedArray = [...paramArray]
  copiedArray.unshift(paramElement);

  return copiedArray;
}

function destructivelyAddElementToBeginningOfArray(paramArray, paramElement){
  paramArray.unshift(paramElement);

  return paramArray;
}

function accessElementInArray(paramArray, paramIndex){
  return paramArray[paramIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(paramArray){

  paramArray.shift();
  return paramArray;
}


function addElementToEndOfArray(paramArray, paramIndex){
  copiedArray = [...paramArray]
  copiedArray.push('foo')
  return copiedArray;
}
