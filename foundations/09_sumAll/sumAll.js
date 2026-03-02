const sumAll = function(firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    return "ERROR";
    }

    if (firstNumber < 0 || secondNumber < 0){
        return "ERROR";
    }

    let smallerNumber = firstNumber > secondNumber ? secondNumber : firstNumber;
    let biggerNumber  = firstNumber > secondNumber ? firstNumber  : secondNumber;

    let totalSum = 0;
    for (i=smallerNumber; i<=biggerNumber; i++){
        totalSum += i;
    }

    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
