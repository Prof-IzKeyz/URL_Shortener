// Here we import external modules and custom local routes
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import resourcesRoutes from './routes/resources.js';

const app = express();

// Fix for ESModules to handle local path directories safely. Since ES Modules don't have __dirname by default, we recreate it using Node's URL attribute utilities.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS rendering template engine is setup here(the view engine).
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// This teaches express how to read incoming JSON data. in request bodies(Middleware).
app.use(express.json());

// This teaches Express how to reads incoming HTML/EJS form data.
app.use(express.urlencoded({ extended: true }));

// Here we're restructuring the application to Route everything under /resources endpoint.
app.use('/resources', resourcesRoutes);

// Frontend view / Home page route. This renders the frontend dashboard.
app.get('/', (req, res) => {
    // This renders the index.ejs file
    res.render('index', { shortUrl: null, error: null });
});

// Here we setup our server, local port.
const PORT = 3000;

// Starts Express server.
app.listen(PORT, () => {
    console.log(`Server check: Routes server is running on http://localhost:${PORT}`);
})