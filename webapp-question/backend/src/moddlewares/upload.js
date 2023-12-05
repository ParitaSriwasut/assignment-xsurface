import multer, { diskStorage } from "multer";

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const split = file.originalname.split(".");
    cb(
      null,
      "" +
        Date.now() +
        Math.round(Math.random() * 1000000) +
        "." +
        split[split.length - 1]
    );
  },
});

const upload = multer({ storage: storage });
export default upload;
