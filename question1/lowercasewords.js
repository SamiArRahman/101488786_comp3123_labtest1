const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        try {
            if (!Array.isArray(mixedArray)) {
                reject(new Error('Input must be an array'));
                return;
            }

            const result = mixedArray
                .filter(item => typeof item === 'string')
                .map(str => str.toLowerCase());

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

//  test
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));

module.exports = lowerCaseWords;