function calculate_median(arr) {
  arr.getSubArray(2).getMedian();
}

Array.prototype.getMedian = function() {
  this.sort();
  if (this.length%2 != 0) {
    return this[(this.length-1)/2];
  } else {
    return average(this[this.length/2-1], this[this.length/2]);
  }
}

function average(num1, num2) {
  return parseInt((num1 + num2) / 2);
}