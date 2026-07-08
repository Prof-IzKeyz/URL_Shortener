import http from "http";
import url from "url";
import fs from "fs";

const hostname = "127.0.0.1";
const port = 3000;

//file name to store the urls
const FILE_NAME = "urls.json";

//function to read the urls from the file and return them as an array
function readUrls() {
    
//read the urls from the file, as many times as the function is called, and return them as an array
    let urls = [];

//check if the file exists, if it does, read the data and parse it to json
    if (fs.existsSync(FILE_NAME)) {
        const data = fs.readFileSync(FILE_NAME, "utf8");

//parse the data to json and store it in urls
        if (data) {
            urls = JSON.parse(data);
        }
    }
    return urls;
}
//function to store the urls in the file
 function storeUrls(urls) {
//write the urls to the file in json format, with 2 spaces indentation, and not modify any properties while converting (null, 2)
    fs.writeFileSync(
        FILE_NAME,
        JSON.stringify(urls, null, 2)
    );
}

//validation
//function to validate the original url
function validateUrl(originalUrl) {
    
//validate the originalurl is not empty
    if (!originalUrl) {
        return "Original URL is required.";
    }
//validate if the originalurl is a string or not
    else if (typeof originalUrl !== "string") {
        return "Original URL must be a string.";
    }

    try {
        const parsedUrl = new URL(originalUrl);
//validate protocool
        if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:")
            return;

    } catch (err) {
        return "Invalid URL format.";
    }

    return null;
}
//console.log(null)