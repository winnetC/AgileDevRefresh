import express from 'express';
import * as fs from 'node:fs/promises'; // Use promises for file operations
import path from 'node:path'; // Use node:path for path utilities
// Using import.meta.url to define __dirname correctly
// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;
// Endpoint to read properties data
app.get('/properties', async (req, res) => {
    // Construct the path to the properties JSON file
    const dataPath = path.join('..', '..', 'property-project', 'src', 'project-data', 'properties.json');
    try {
        // Read the JSON file
        const data = await fs.readFile(dataPath, 'utf8');
        const properties = JSON.parse(data);
        res.json(properties);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Error reading or parsing data file:', err.message);
            res.status(500).send(`Error reading or parsing data file: ${err.message}`);
        }
        else {
            console.error('Unexpected error occurred:', err);
            res.status(500).send('Unexpected error occurred.');
        }
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map