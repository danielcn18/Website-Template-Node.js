// Resources: 
// https://www.w3schools.com/w3css/w3css_templates.asp
// https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_startup

// Import Required Modules
const http = require('http');
const fs = require('fs');

// Define Server Configuration
// This sets up the hostname (IP address) and port number on which the server will listen for incoming requests
const hostname = "127.0.0.1";
const port = 3200;

// Read HTML and Image Files
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const teamPage = fs.readFileSync('team.html');
const workPage = fs.readFileSync('work.html');
const pricingPage = fs.readFileSync('pricing.html');
const contactPage = fs.readFileSync('contact.html');

// Create HTTP Server
// The callback function receives the request (req) and response (res) objects 
const server = http.createServer((req, res) => {
    /* const url = req.url; */
    /* const method = req.method; */
    // Handle Incoming Requests 
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("content-Type", "text/html");
        res.write(homePage);
    }
    else if(req.url === "/about.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(aboutPage);
    }
    else if(req.url === "/team.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(teamPage);
    }
    else if(req.url === "/work.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(workPage);
    }
    else if(req.url === "/pricing.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(pricingPage);
    }
    else if(req.url === "/contact.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(contactPage);
    }
    // Send Responses 
    else if(req.url.match("\.jpg$")){
        try{
            res.statusCode = 200;
            res.setHeader("Content-Type", "image/jpg");
            imgLoc = req.url.replace("/", "./");
            console.log(imgLoc);
            image = fs.readFileSync(imgLoc);
            res.end(image);
        }
        catch {
            res.statusCode = 404;
            res.write("404");
            console.log(req.url);
        }
    }
    else{
        res.statusCode = 404;
        res.write("404");
        console.log(req.url);
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log("Server is now running.");
});