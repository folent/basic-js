module.exports = function repeater(str, options) {

    let result = [];

    if (typeof options.repeatTimes == 'undefined') {

        options.repeatTimes = 1;

    }

    if ('addition' in options) {

        options.addition += '';

        if ('additionRepeatTimes' in options || 'additionSeparator' in options) {

            options.addition = repeater(options.addition, { repeatTimes: options.additionRepeatTimes, separator: options.additionSeparator });
            str += options.addition;

        }
    }
    for (let i = 0; i < options.repeatTimes; i++) {

        result.push(str);
    }
    if ('separator' in options || typeof options.separator !== 'undefined') {

        sep = options.separator;

    } else {

        sep = '+';
    }
    return result.join(sep);





};