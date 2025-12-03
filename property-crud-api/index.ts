import express  from 'express';
import propertyRoutes from './routes/propertyRoutes.ts'; // Import routes

const app = express();
const PORT: number = Number(process.env.PORT) || 8001; // Ensure PORT is a number

app.use(express.json()); // Middleware for parsing JSON request bodies
app.use('/api', propertyRoutes); // Use the property routes under the '/api' prefix

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});