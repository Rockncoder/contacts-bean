/**
 * Created by troymiles on 6/18/15.
 */




function numToDays(num) {
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return function () {
    return days[num];
  }
}


console.log(numToDays(1));
