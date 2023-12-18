import multer, { memoryStorage } from "multer";

// uploaded files are kept in memory (RAM) instead of being written to a disk. keeping files in memory can be faster.
const storage = memoryStorage();

const upload = multer({ storage: storage });
export default upload;
