const fs = require('fs');

module.exports = (function () {

    return {
        openFilePromise,
        readDirPromise
    };

    function openFilePromise(path, options) {
        return new Promise((res, reject) => {
            fs.readFile(path, options, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    res(data);
                }
            });
        });
    }

    function readDirPromise(path, options) {
        return new Promise((res, reject) => {
            fs.readdir(path, options, (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    res(files);
                }
            });
        });
    }
})()