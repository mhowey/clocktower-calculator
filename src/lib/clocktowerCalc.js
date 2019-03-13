import moment from 'moment';

// function that returns the number of bell rings during time period...
function countBellRings(startIn, endIn) {
  var start = moment(startIn, 'HH:mm');
  var end = moment(endIn, 'HH:mm');

  // validate the input values...
  if (!start.isValid()) {
    return 'Invalid start value!';
  }
  if (!end.isValid()) {
    return 'Invalid end value!';
  }

  // set our individual hour and minute values for start and end...
  let startHr = start.hours(),
    startMin = start.minutes(),
    endHr = end.hours();

  // we need to handle the midnight case - if it's 24:00...
  if (startHr === 0) {
    startHr = 24;
  }

  // if the start minutes aren't zero, we need to use the next hour as the start...
  if (startMin !== 0) {
    startHr = startHr + 1;
  }

  // array where we store our hour values...
  var hrsArr = [];

  if (startHr > endHr) {
    // the start IS bigger than the end push the start to the array
    var n;
    // iterate through the hours from start value to 24
    for (let i = startHr; i <= 24; i++) {
      // convert 24 hour to 12 hour...
      i > 12 ? (n = i - 12) : (n = i);

      hrsArr.push(n);
    }

    // iterate through the hours from 1 to the end value
    for (let i = 1; i <= endHr; i++) {
      // convert 24 hour to 12 hour...
      i > 12 ? (n = i - 12) : (n = i);
      hrsArr.push(n);
    }
  } else {
    // the start isn't bigger than the end

    // iterate through the hours and push to our array...
    for (let hr = startHr; hr <= endHr; hr++) {
      // convert 24 hour to 12 hour...
      hr > 12 ? (n = hr - 12) : (n = hr);

      hrsArr.push(n);
    }
  }

  // return the total of all values in the array...
  try {
    return hrsArr.reduce((accumulator, value) => accumulator + value);
  } catch (errorMessage) {
    console.error(errorMessage);
  }
}

export default countBellRings;

// console.log('Bell rings during period: ',countBellRings(startHr, endHr));
