import multer from 'multer';

const storage = multer.memoryStorage(); // ✅ in-memory buffer
const upload = multer({ storage });

export default upload;
