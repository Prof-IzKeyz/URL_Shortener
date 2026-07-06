import dataStorage from '../data/storage.js';
import { generateCode } from '../utils/generateShortCode.js';

export const getAllUrls = async () => {
    return dataStorage;
};

export const createShortUrl = async(body) => {
        
    // Here i'm simply saying, use custom code if provided else generate a random 6 character string.
    let finalCode = body.customCode && body.customCode.trim() !== "" ? body.customCode : generateCode();
    const timestamp = new Date().toISOString();

    // This package the link and its metadata into a clean label before saving it
    // (Storage team will add their code above this block of code for the validation i.e is the originalUrl body empty? if yes send back an error, does the finalCode already exist in our system? if yes send back a Duplicate id error). And add code below the block that says take this completed newRecord package and write it into our storage system.
    const newRecord = {
        id: finalCode, // The short link code
        originalUrl: body.originalUrl, // The real website destination.
        clicks: 0, // Starts the click tracker with zero
        createdAt: timestamp, // Creation time. 
        updatedAt: timestamp // updated time.
    };

    // Save the new record into the memory list (Replace this line Our storage file saving function).
    dataStorage.push(newRecord);

    return newRecord;
};

export const findUrlById = async(id) => {
    // Search for the matching short url
    const urlRecord = dataStorage.find(item => item.id === id);

    // If it doesn't exist return null
    if(!urlRecord){
        return null;
    }

    // This increments counts and is stored by the storage team for analytics purposes
    urlRecord.clicks += 1;
    urlRecord.updatedAt = new Date().toISOString();

    return urlRecord;
};

// Updates the destination URL or an existing shortened url.
export const updateUrl = async(id, originalUrl) => {
    // Search for the record.
    const record = dataStorage.find(item => item.id === id);

    // Return null id not found
    if(!record){
        return null;
    }

    // Update the destination URL.
    record.originalUrl = originalUrl;

    // Update the timestamp.
    record.updatedAt = new Date().toISOString();

    return record;
};

// Delete URL. Removes a shortened URL from the storage list.
export const deleteUrl = async(id) => {
    // Find the index / ID of the matching record.
    const index = dataStorage.findIndex(item => item.id === id);

    // Return false if the record doesn't exist.
    if(index === -1){
        return false;
    }

    // This remove exactly one record.
    dataStorage.splice(index, 1);

    return true;
}