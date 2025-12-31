const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uploadPath = 'public/images/';

        // Determine subfolder based on route or field name
        const isService = req.body.type === 'service' || req.baseUrl.includes('services') || req.originalUrl.includes('services');
        const isProduct = req.body.type === 'product' || req.baseUrl.includes('products') || req.originalUrl.includes('products');

        if (isService) {
            uploadPath += 'services/';
        } else if (isProduct) {
            uploadPath += 'products/';
        } else {
            // Default fallback if logic is ambiguous, though we should handle this in controller
            uploadPath += 'misc/';
        }

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        // Create unique filename: originalname-timestamp.extension
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// File filter (optional, to ensure only images are uploaded)
// File filter (restrict to PNG only)
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Only .png files are allowed!'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

module.exports = upload;
