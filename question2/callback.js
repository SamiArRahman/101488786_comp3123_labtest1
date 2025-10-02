// resolve promise
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'delayed success!' });
        }, 500);
    });
};

// rejected promise
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ 'error':  'delayed exception!' });
        }, 500);
    });
};


resolvedPromise()
    .then(success => console.log(success))
    .catch(error => console.error(error));

rejectedPromise()
    .then(success => console.log(success))
    .catch(error => console.error(error));

module.exports = { resolvedPromise, rejectedPromise };