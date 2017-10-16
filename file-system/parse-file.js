const fs = require('fs');

{
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

    function parseFile() {
        readDirPromise('./file-system')
            .then(files => {
                const promises = files
                    .filter(elem => elem.includes('.txt'))
                    .map(elem => openFilePromise('file-system/' + elem, 'utf8'));

                return Promise.all(promises);
            })
            .then(data => {
                const keys = ['name', 'lastname', 'secondLastname', 'birthday', 'email'];

                const parsedData = data.map((elem) => {
                    const splitedData = elem.split(';');
                    let result = {};
                    for(let i=0; i< splitedData.length; i++){
                        result[keys[i]] = splitedData[i];
                    }

                    return result;
                })
                .map(console.log);
            })
            .catch(console.error);
    }

    parseFile();
}