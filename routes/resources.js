import express from 'express';
import { getAllUrls, createShortUrl, findUrlById, updateUrl, deleteUrl } from '../services/url-service.js';

const router = express.Router();

// This fetches and returns a list of all saved links (it gets all links. This is used to fetch and search every saved link in the DB).
router.get('/', async (req, res) => {
    try {
        const records = await getAllUrls();

        return res.status(200).json(records);
    } catch(error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

// This handles form submission from the frontend(index.ejs), and re-renders the page. I put it above '/:id' so Express doesn't mistake 'ui-create' for a link ID.
router.post('/ui-create', async (req, res) => {
    try {

        // Create a new shortened URL.
        const newRecord = await createShortUrl(req.body);

        // This re-renders the index view dashboard layout passing the 
        // complete shortened Url path link back to EJS.
        const fullShortUrl = `http://localhost:3000/resources/${newRecord.id}`;

        // This re-renders the homepage with the generated URL.
        return res.render('index', {
            shortUrl: fullShortUrl,
            error: null
        });

    } catch(error) {
        return res.status(400).render('index', {
            shortUrl: null,
            error: error.message || "Internal server error"
        });
    }
});

// This handles the redirect logic when shortened link is visited.
router.get('/:id', async (req, res) => {
    try {

        const urlRecord = await findUrlById(req.params.id);

        if (!urlRecord) {
            return res.status(404).json({ error: "Not found" });
        }

        // This forwards the shortened URL to the original URL.
        return res.redirect(urlRecord.originalUrl);

    } catch(error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

// This listens for and handles API requests to generate a shortened link.
router.post('/', async (req, res) => {
    try {

        const newRecord = await createShortUrl(req.body);

        return res.status(201).json(newRecord);

    } catch(error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Here we update an existing short code's original / long URL.
router.put('/:id', async (req, res) => {
    try {

        const updatedRecord = await updateUrl(
            req.params.id,
            req.body.originalUrl
        );

        if (!updatedRecord) {
            return res.status(404).json({ error: "Not found" });
        }

        return res.status(200).json(updatedRecord);

    } catch(error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

// This block permanently deletes a shortened link from the system.
router.delete('/:id', async (req, res) => {
    try {

        const deleted = await deleteUrl(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Not found" });
        }

        return res.status(200).json({ message: "Deleted" });

    } catch(error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

export default router;