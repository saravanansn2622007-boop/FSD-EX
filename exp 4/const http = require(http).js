const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`
            <h1>Student Application</h1>

            <h2>GET Request</h2>
            <p>Welcome to the Node.js web application</p>

            <h2>POST Request</h2>

            <form method="POST" action="/student">
                <label>Name:</label>
                <input type="text" name="name">
                <br><br>

                <label>Department:</label>
                <input type="text" name="department">
                <br><br>

                <button type="submit">Submit</button>
            </form>
        `);

        res.end();

    } else if (req.method === "POST" && req.url === "/student") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const data = querystring.parse(body);

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.write(`
                <h1>Student Details</h1>
                <p>Name: ${data.name}</p>
                <p>Department: ${data.department}</p>
            `);

            res.end();
        });

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});