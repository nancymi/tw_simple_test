function even_group_calculate_average(arr) {
  arr.getSubArray(2).getEven().getGroupByDigit().getGroupAverage();
}

Array.prototype.getEven = function() {
  var evens = new Array();
  for(var i = 0; i < this.length; i ++) {
    if (this[i]%2 == 0)
      evens.push(this[i]);
  }
  return evens;
}

Array.prototype.getGroupByDigit = function() {
  var evensByDigit = new Array();
  for (var i = 0; i < this.length; i ++) {
    var digit = this[i].toString().length;
    if (evensByDigit[digit] == null)
      evensByDigit[digit] = new Array();
    evensByDigit[digit].push(this[i]);
  }
  return evensByDigit;
}

Array.prototype.getGroupAverage = function() {
  var averages = new Array();
  if (this.length == 0) {
    alert(averages);
    return averages;
  }
  for (var i = 0; i < this.length; i ++) {
    if (this[i] != null) {
      var average = getAve(this[i]);
      averages.push(average);
    }
  }
  return averages;
}

function getAve(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i ++) {
    sum += arr[i];
  }
  sum /= arr.length;
  return parseInt(sum);
}