const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  }) 
  const upload = multer(
    {
        storage: storage,
        fileFilter: function (req, file, cb) {
            
            const filetypes = /pdf/;
            const extname = filetypes.test(path.extname(file.originalname));
            const mimetype = filetypes.test(file.mimetype);
            if(mimetype && extname){
                
                cb(null, true);
            }
            else{
                return cb(new Error('Only PDF files are allowed!'), false);
           }
        },
        limits: { fileSize: 5 * 1024 * 1024 }
    }
  ).single('resume');
  
  module.exports = upload;