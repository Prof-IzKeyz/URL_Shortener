//  Adding storage teams work to connect to the url routes team.
import fs from 'fs';

const FILE_NAME = "urls.json";

export function readUrls(){
    let urls = [];
    if(fs.existsSync(FILE_NAME)){
        //
        const data = fs.readFileSync(FILE_NAME, "utf-8");
        if(data){
            urls = JSON.parse(data);
        }
    }
    return urls;
}

export function storeUrls(urls){
    fs.writeFileSync(FILE_NAME, JSON.stringify(urls, null, 2));
}

// The storage team validation layer
export function validateUrl(originalUrl){
    if(!originalUrl){
        return "Original url is required";
    } else if(typeof originalUrl !== "string"){
        return "Original URL must be a string";
    }

    try{
        const parsedUrl = new URL(originalUrl);
        if(parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:")
             return;
    } catch(err){
        return "Invalid URL format."
    }
    return null;
}