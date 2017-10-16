const http = require('http');

{
    const server = http.createServer((req, res) => {
        const path = req.url;
        res.writeHead(200, {'Content-Type': 'text/html'});
        if(path === '/init'){
            res.write('<h1>Hola</h1>');
        }
        if(path === '/json'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({
                id: '145425h2h5',
                name: 'Ruben'
            }));
        }
        res.end();
    }).listen(3000);

    console.log('Server listening on port 3000');
}