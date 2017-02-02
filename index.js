function iterativeLog(array){
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`)});
}
function iterate(myCallback){
  var myArray = [0,1,2,3];
  myArray.forEach(myCallback);
  return myArray;
}
function doToArray(array, callback){
  array.forEach(callback);
}
