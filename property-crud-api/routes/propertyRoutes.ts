import express  from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import { eq } from 'drizzle-orm';
import { property } from '../db/schema.ts';

const db = drizzle(process.env.DATABASE_URL!);

interface PropertyRequestBody {
    title: string;
    price: number; // assuming price is a numeric value
    status: 'available' | 'sold' | 'pending';
}

const router = express.Router();

// Create a new property
router.post(
    '/v1/properties',
    body('title').notEmpty().withMessage('Title is required'),
    body('price').isNumeric().withMessage('Price must be a numeric value'), // Validate as numeric
    body('status').isIn(['available', 'sold', 'pending']).withMessage('Status must be one of available, sold, pending'),
    async (req: Request<{}, {}, PropertyRequestBody>, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, price, status } = req.body;
        try {
            // Convert price to a number
            const priceValue = Number(price);
            if (isNaN(priceValue)) {
                return res.status(400).json({ error: 'Price must be a valid number' });
            }
            // Convert price to string with two decimal places
            const formattedPrice = priceValue.toFixed(2);

            const result = await db.insert(property).values({
                title,
                price: formattedPrice, // Use the formatted price string
                status
            }).$returningId();

            const id = result[0]?.id; // Access the ID from the result

            res.status(201).json({ id, title, price: formattedPrice, status }); // Return the formatted price
        } catch (error) {
            res.status(500).json({ error: 'Database error', details: (error as Error).message });
        }
    }
);

// Get all properties
router.get('/v1/properties', async (req, res) => {
    try {
        const allProperties = await db.select().from(property);
        res.json(allProperties);
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: (error as Error).message });
    }
});

// Get a specific property by ID
router.get('/v1/properties/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);  // Parse the ID from the request parameters

    // Validate if ID is a number
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid property ID' });
    }

    try {
        const propertyRecord = await db
            .select()
            .from(property)
            .where(eq(property.id, id)); // Use Drizzle's query syntax for conditions

        if (propertyRecord.length === 0) {
            return res.status(404).json({ message: 'Property not found' });
        }
        
        res.json(propertyRecord[0]);  // Return the first matching property
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: (error as Error).message });
    }
});

// Update a property by ID
router.put('/v1/properties/:id',
    body('title').optional().notEmpty().withMessage('Title is required if provided'),
    body('price').optional().isNumeric().withMessage('Price must be a numeric value'),
    body('status').optional().isIn(['available', 'sold', 'pending']).withMessage('Status must be one of available, sold, pending'),
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const propertyId = Number(id);

        if (isNaN(propertyId)) {
            return res.status(400).json({ error: 'Invalid property ID' });
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, price, status } = req.body;
        try {
            const updates: any = {};
            if (title) updates.title = title;

            // Check if price is provided and valid
            if (price) {
                const priceValue = Number(price); // Convert to number
                if (!isNaN(priceValue)) {
                    updates.price = priceValue.toFixed(2); // Set formatted price
                } else {
                    return res.status(400).json({ error: 'Price must be a numeric value' });
                }
            }

            if (status) updates.status = status;

            // Run the update and check the result
            const [result] = await db.update(property)
                .set(updates)
                .where(eq(property.id, propertyId))
                .execute();

            // Check affected rows
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Property not found' });
            }

            res.status(200).json({ id: propertyId, ...updates });
        } catch (error) {
            res.status(500).json({ error: 'Database error', details: (error as Error).message });
        }
    }
);

// Delete a property by ID
router.delete('/v1/properties/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const propertyId = Number(id);

    // Validate if ID is a number
    if (isNaN(propertyId)) {
        return res.status(400).json({ error: 'Invalid property ID' });
    }

    try {
        // Run the delete operation
        const [result] = await db.delete(property)
            .where(eq(property.id, propertyId))
            .execute();

        // Check affected rows
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Property not found' });
        }

        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: (error as Error).message });
    }
});

export default router;