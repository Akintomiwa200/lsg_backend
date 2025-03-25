import express from "express";
import { createBuyer, getBuyers } from "../controllers/buyerController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Buyers
 *   description: API endpoints for managing buyers
 */

/**
 * @swagger
 * /api/buyers:
 *   post:
 *     summary: Create a new buyer
 *     tags: [Buyers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - budget
 *               - interest
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               budget:
 *                 type: number
 *               interest:
 *                 type: string
 *     responses:
 *       201:
 *         description: Buyer created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", createBuyer);

/**
 * @swagger
 * /api/buyers:
 *   get:
 *     summary: Get all buyers
 *     tags: [Buyers]
 *     responses:
 *       200:
 *         description: Successful retrieval of buyers
 *       500:
 *         description: Internal server error
 */
router.get("/", getBuyers);

export default router;
