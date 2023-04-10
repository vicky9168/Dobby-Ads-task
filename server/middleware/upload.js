import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload')
    },
    filename: function (req, file, cb) {
        // let ext=path.extname(file.originalname)
        // cb(null, Date.now()+ ext)
        cb(null,file.originalname)
    }
});
const upload = multer({storage: storage});
// const upload = multer({
//     storage: storage,
//     fileFilter:function(req,file,callback){
//         if(
//             file.mimetype == "image/png" ||
//             file.mimetype == "image/jpg"
//         ){
//             callback(null,true)
//         } else{
//             console.log("Only jpg & png file supported!")
//             callback(null,false)
//         }
//     },
//     limits:{
//         fileSize:1024 * 1024 *5
//     }

// });

export default upload;