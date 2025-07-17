import { v2 as cloudinary } from 'cloudinary';

// Cloudinary Config - .env file-ல் key வச்சுருக்கணும்
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload Function
export const uploadVideo = async (req, res) => {
  try {
    const fileStr = req.file.buffer.toString('base64');

    const uploadedResponse = await cloudinary.uploader.upload(
      `data:video/mp4;base64,${fileStr}`,
      { resource_type: 'video' }
    );

    res.status(200).json({ url: uploadedResponse.secure_url });
  } catch (err) {
    console.error('Upload Error:', err);
    res.status(500).json({ error: 'Video upload failed' });
  }
};
