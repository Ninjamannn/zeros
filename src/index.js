module.exports = function getZerosCount(number) {
    var zerosCount = 0;
    while (number) {
        number = Math.floor(number/5);
        zerosCount += number;
    }
    return zerosCount;
};