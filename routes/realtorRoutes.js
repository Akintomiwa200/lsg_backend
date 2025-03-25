import express from "express";
import { createRealtor, getRealtors } from "../controllers/realtorController.js";

const router = express.Router();

/**
 * @swagger
 * /api/realtors:
 *   post:
 *     summary: Create a new realtor
 *     tags: [Realtors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               licenseNumber:
 *                 type: string
 *               agency:
 *                 type: string
 *               experience:
 *                 type: string
 *               specialization:
 *                 type: string
 *     responses:
 *       201:
 *         description: Realtor created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", createRealtor);

/**
 * @swagger
 * /api/realtors:
 *   get:
 *     summary: Get all realtors
 *     tags: [Realtors]
 *     responses:
 *       200:
 *         description: Successful retrieval of realtors
 */
router.get("/", getRealtors);

export default router;
