// Code your solution here

const findMatching = function(drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase();
  })
}

const fuzzyMatch = function(drivers, str) {
  length = str.length;
  return drivers.filter(driver => {
    return driver.slice(0, length) === str;
  })
  
}

const matchName = function(drivers, name) {
  return drivers.filter(driver => {
    return driver.name.toLowerCase() === name.toLowerCase();
  })
}


  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });