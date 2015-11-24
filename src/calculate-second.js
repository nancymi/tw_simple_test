function calculate_median(arr) {
  var middleArr = get_median(arr);
  var middle = (middleArr.length-1) / 2;
  middleArr.sort();
  return get_middle(middleArr);
}

function get_median(arr) {
  var medianList = [], temp = 0;
  for (var i = 1; i < arr.length; i += 2) {
    medianList[temp++] = arr[i];
  }
  return medianList;
}

function get_middle(middleArr) {
  if (middleArr.length%2 == 0) {
    return (middleArr[middleArr.length/2-1] + middleArr[middleArr.length/2+1])/2;
  } else {
    return middleArr[(middleArr.length+1)/2];
  }
}