// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function (anArr) {
  let resultArr = [];
  for (let i of anArr) {
    if (String(i).length === 1) {
      resultArr.push(i);
    } else {
      let splittedNum = String(i).split("");
      let len = splittedNum.length;
      let sum = 0;
      for (let digit of splittedNum) {
        sum += Number(digit) ** len;
      }
      if (sum === i) {
        resultArr.push(i);
      }
    }
  }
  return resultArr;
};
