function single_element(arr) {
  return arr.getSubArray(2).getNoRepeat();
}

Array.prototype.getNoRepeat = function () {
  var start = this.length, end, isRepeat;
  while (start --) {
    end = start;
    isRepeat = false;
    while (end --) {
      if (this[start] === this[end]) {
        this.splice(end, 1);
        start --;
        isRepeat = true;
      }
    }
    if (isRepeat == true)
      this.splice(start, 1);
  }
  return this;
}

Array.prototype.getSubArray = function (subscriptInterval) {
  var subArray = [];
  for (var i = 1; i < this.length; i += subscriptInterval) {
    subArray.push(this[i]);
  }
  return subArray;
}