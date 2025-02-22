import multer from 'multer';


// Set storage engine
const storage = multer.diskStorage({})

// Initialize upload
const upload = multer({ storage})


export default upload;