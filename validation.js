// Validation
function validateUrl(originalUrl) {

    // Check if URL is provided
    if (!originalUrl) {
        return "Original URL is required.";
    }

    // Check if URL is a string
    if (typeof originalUrl !== "string") {
        return "Original URL must be a string.";
    }

    // Regular Expression for URL validation
    const urlRegex = /^(https?:\/\/)([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/i;

    // Validate using Regex
    if (!urlRegex.test(originalUrl.trim())) {
        return "URL does not match the required format.";
    }

    try {
        const parsedUrl = new URL(originalUrl);

        // Validate protocol
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
