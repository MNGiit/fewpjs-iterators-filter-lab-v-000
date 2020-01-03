// Code your solution here

const findMatching = function(drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase();
  })
}

const fuzzyMatch = function() {
  
}