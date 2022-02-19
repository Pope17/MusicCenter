const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/avatars');
    },
    fileName: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cd(null, fileName);
    }
})

const uploadfile = multer({ storage });

module.exports = uploadfile;
