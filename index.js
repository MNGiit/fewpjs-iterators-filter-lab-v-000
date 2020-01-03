// Code your solution here

const findMatching = function(drivers, name) {
  return drivers.filter(driver => {
    return driver === name;
  })
}