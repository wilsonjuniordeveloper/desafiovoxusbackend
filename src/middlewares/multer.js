const multer = require('multer');
const path = require('path');


module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..','uploads'))
        },
        filename: function (req, file, cb) {
            cb(null, `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`);
        }
    }),
    fileFilter: (req, file, cb)=>{
        const alloewdMime = [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];

        if(alloewdMime.includes(file.mimetype)){
            cb(null, true);
        }else {
            cb(new Error("invalid file type"));
        }

    }
}