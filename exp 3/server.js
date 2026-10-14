const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

let storedData = {
    name: "Arun",
    course: "NodeJS"
};

const server = http.createServer((req, res) => {

    // GET Request
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading HTML file');
                return;
            }

            res.end(data);
        });
    }

    // POST Request
    else if (req.method === 'POST' && req.url === '/data') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                storedData = JSON.parse(body);

                res.writeHead(201, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify({
                    method: 'POST',
                    message: 'Data created successfully',
                    data: storedData
                }));
            } catch (error) {
                res.writeHead(400, {
                    'Content-Type': 'application/json'
                });
                res.end(JSON.stringify({
                    message: 'Invalid JSON data'
                }));
            }
        });
    }

    // PUT Request
    else if (req.method === 'PUT' && req.url === '/data') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                storedData = JSON.parse(body);

                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify({
                    method: 'PUT',
                    message: 'Data updated successfully',
                    data: storedData
                }));
            } catch (error) {
                res.writeHead(400, {
                    'Content-Type': 'application/json'
                });
                res.end(JSON.stringify({
                    message: 'Invalid JSON data'
                }));
            }
        });
    }

    // DELETE Request
    else if (req.method === 'DELETE' && req.url === '/data') {
        storedData = null;

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            method: 'DELETE',
            message: 'Data deleted successfully'
        }));
    }

    // Invalid Request
    else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: '404 - Page Not Found'
        }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});