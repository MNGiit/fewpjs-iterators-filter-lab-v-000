// Code your solution here

const findMatching = function(drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase();
  })
}

const fuzzyMatch = function(drivers, str) {
  length = str.length();
}

const matchName = function(drivers, name) {
  return drivers.filter(driver => {
    return driver.name.toLowerCase() === name.toLowerCase();
  })
}