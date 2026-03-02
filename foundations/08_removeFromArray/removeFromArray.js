const removeFromArray = function(array, ...itemsToRemove) {
    return newArray = array.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
