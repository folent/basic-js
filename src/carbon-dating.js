const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {


    if (typeof sampleActivity !== 'string' || !/^[0-9]*[\.]{0,1}[0-9]*[\.]{0,1}[0-9]*$/.test(sampleActivity)) {

        return false;
    }

    let num = parseFloat(sampleActivity.match(/^[0-9]*[\.]{0,1}[0-9]*/));

    if (num > 0 && num < 15) {

        return Math.ceil((Math.log(MODERN_ACTIVITY / num) * HALF_LIFE_PERIOD) / 0.693);
    }
    return false;







};