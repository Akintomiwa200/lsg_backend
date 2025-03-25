import express from "express";
import { createQuote, getQuotes } from "../controllers/quoteController.js";


const router = express.Router();

/**
 * @swagger
 * /api/quotes:
 *   post:
 *     summary: Create a new quote request
 *     tags: [Quotes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               plots:
 *                 type: string
 *               purpose:
 *                 type: string
 *     responses:
 *       201:
 *         description: Quote request created successfully
 *       400:
 *         description: Bad request
 *
 *   get:
 *     summary: Get all quote requests
 *     tags: [Quotes]
 *     responses:
 *       200:
 *         description: Successfully retrieved all quote requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   plots:
 *                     type: string
 *                   purpose:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Server error
 */

router.post("/", createQuote);
router.get("/", getQuotes);

export default router;
