import http from "http";
import url from "url";
import fs from "fs";

const hostname = "127.0.0.1";
const port = 3000;

const FILE_NAME = "urls.json";

export function readUrls() {
    let urls = [];

    if (fs.existsSync(FILE_NAME)) {
        const data = fs.readFileSync(FILE_NAME, "utf8");

        if (data) {
            urls = JSON.parse(data);
        }
    }
    return urls;
}
export function storeUrls(urls) {
    fs.writeFileSync(
        FILE_NAME,
        JSON.stringify(urls, null, 2)
    );
}

//validation
function validateUrl(originalUrl) {

    if (!originalUrl) {
        return "Original URL is required.";
    }

    if (typeof originalUrl !== "string") {
        return "Original URL must be a string.";
    }

    try {
        const parsedUrl = new URL(originalUrl);

        if (
            parsedUrl.protocol !== "http:" &&
            parsedUrl.protocol !== "https:"
        ) {
            return "Only HTTP and HTTPS URLs are allowed.";
        }

    } catch (err) {
        return "Invalid URL format.";
    }

    return null;
}
console.log(null)