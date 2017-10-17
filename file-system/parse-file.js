const {
    readDirPromise,
    openFilePromise
} = require('./utils/fs-promisify');

{
    function parseFile() {
        readDirPromise('./file-system')
            .then(readFiles)
            .then(parseFiles)
            .catch(console.error);
    }

    function readFiles(files) {
        const promises = files
            .filter(elem => elem.includes('.txt'))
            .map(elem => openFilePromise('file-system/' + elem, 'utf8'));

        return Promise.all(promises);
    }

    function parseFiles(data) {
        const keys = ['name', 'lastname', 'secondLastname', 'birthday', 'email'];

        const parsedData = data.map((elem) => {
            const splitedData = elem.split(';');
            let result = {};
            for (let i = 0; i < splitedData.length; i++) {
                result[keys[i]] = splitedData[i];
            }

            return result;
        })
            .map(console.log);
    }

    parseFile();
}