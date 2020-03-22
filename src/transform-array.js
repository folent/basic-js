module.exports = function transform(array) {

    if (!Array.isArray(array)) {
        throw new Error();
    }

    for (let i = 0; i < array.length; i++) {

        if (array[i] == '--discard-next') {

            if (i < array.length - 1) {
                i++;
            }
            array.splice(i, 1);

        } else if (array[i] == '--discard-prev') {

            if (array.length > 0) {

                array.splice(i - 1, 2);;


            }

        } else if (array[i] == '--double-next') {
            if (i + 1 < array.length) {

                array.splice(i, 1, array[i + 1]);
            }

        } else if (array[i] == '--double-prev') {
            if (i > 0) {

                array.splice(i, 1, array[i - 1]);
            }


        } else {
            array.splice(i, 1);
        }

    }

    return array;

};