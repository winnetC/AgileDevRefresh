import express from 'express';
import properties from '../../property-project/src/project-data/properties.json';
const app = express();
const PORT = process.env.PORT || 3001;
// Endpoint to read properties data
app.get('/properties', (req, res) => {
    try {
        res.json(properties);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Error sending data:', err.message);
            res.status(500).send(`Error sending data: ${err.message}`);
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