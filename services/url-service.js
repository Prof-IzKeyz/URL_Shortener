import { readUrls, storeUrls, validateUrl } from '../data/storage.js';
import { generateCode } from '../utils/generateShortCode.js';


const getFreshdatabse = () => readUrls();

export const getAllUrls = async () => {
    return getFreshdatabse();
};

export const createShortUrl = async(body) => {
        
    // Added storage teams URL input validation.
    const urlError = validateUrl(body.originalUrl);
    if(urlError){
        throw new Error(urlError);
    }

    const currentDataBase = getFreshdatabse();

    // Here i'm simply saying, use custom code if provided else generate a random 6 character string.
    let finalCode = body.customCode && body.customCode.trim() !== "" ? body.customCode : generateCode();
    const timestamp = new Date().toISOString();

    // Storage teams prevent duplicate short code / URL validation.
    const isDuplicateId = currentDataBase.some(item => item.id === finalCode);
    if(isDuplicateId){
        throw new Error("Short URL is already taken.");
    }

    // This package the link and its metadata into a clean label before saving it
    const newRecord = {
        id: finalCode, // The short link code
        originalUrl: body.originalUrl, // The real website destination.
        clicks: 0, // Starts the click tracker with zero
        createdAt: timestamp, // Creation time. 
        updatedAt: timestamp // updated time.
    };

    // Save the new record into the memory list.
    // Added storage teams Append new record and write disk file.
    currentDataBase.push(newRecord);
    storeUrls(currentDataBase);

    return newRecord;
};

// Here we're searching for a shortened Link and incrementing it's click count for analytic purpose.
export const findUrlById = async(id) => {
    const currentDataBase = getFreshdatabse();

    // Search for the matching short url
    const urlRecord = currentDataBase.find(item => item.id === id);

    // If it doesn't exist return null
    if(!urlRecord){
        return null;
    }

    // This increments counts and is stored by the storage team.
    urlRecord.clicks += 1;
    urlRecord.updatedAt = new Date().toISOString();
    storeUrls(currentDataBase);

    return urlRecord;
};

// Updates the destination URL or an existing shortened url.
export const updateUrl = async(id, originalUrl) => {
    // Storage team ensures that the newly submitted target link(long url) is perfect.
    const urlError = validateUrl(originalUrl);
    if(urlError){
        throw new Error(urlError);
    }

    // Search for the record.
    const currentDataBase = getFreshdatabse();
    const record = currentDataBase.find(item => item.id === id);

    // Return null id not found
    if(!record){
        return null;
    }

    // Update the destination URL.
    record.originalUrl = originalUrl;

    // Update the timestamp.
    record.updatedAt = new Date().toISOString();

    // Store
    storeUrls(currentDataBase);

    return record;
};

// Delete URL. Removes a shortened URL from the storage list.
export const deleteUrl = async(id) => {
    // Find the index / ID of the matching record.
    const currentDataBase = getFreshdatabse();
    const index = currentDataBase.findIndex(item => item.id === id);

    // Return false if the record doesn't exist.
    if(index === -1){
        return false;
    }

    // This remove exactly one record.
    currentDataBase.splice(index, 1);
    storeUrls(currentDataBase)

    return true;
}