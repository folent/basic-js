module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    turnsSpeed = turnsSpeed / 3600;
    return {
        turns: 2 ** disksNumber - 1,
        seconds: (2 ** disksNumber - 1) / turnsSpeed,
    };


};