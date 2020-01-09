// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key){
  const deleteDriver = Object.assign({}, obj);
  delete deleteDriver[key];

  return deleteDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key];
  return obj;
}