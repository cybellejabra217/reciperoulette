const multer = require('multer');

//multer storage settings
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb(null, 'uploads/recipePictures');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// filter to allow only image files
const fileFilter = (req, file, cb) => {
   
    if (file.mimetype.startsWith('image/')) {
        cb(null, true); 
    } else {
        cb(new Error('Only image files are allowed'), false); 
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;