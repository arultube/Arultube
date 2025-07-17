import express from 'express';
import multer from 'multer';
import { uploadVideo } from '../controllers/videoController.js';

const router = express.Router();

// Memory-based storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route: POST /upload
router.post('/upload', upload.single('video'), uploadVideo);

export default router;
