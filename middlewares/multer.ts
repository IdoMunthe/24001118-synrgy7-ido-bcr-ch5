import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

//Validating image format
const validateFileType = (allowedMimeTypes:string[]) => {
    return (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
        if(allowedMimeTypes.includes(file.mimetype)){
            cb(null, true);
        } else {
            const err = new Error(`Only accepted file with one of these types: ${allowedMimeTypes.toString()}`) as any;
            cb(err, false)
        }
    }
}

//Limit file size to 20 MB
const UploadImage = multer({
    storage: multer.memoryStorage(),
    fileFilter: validateFileType(['image/bmp', 'image/jpeg', 'image/x-png', 'image/png', 'image/gif']),
    limits:{ fileSize: 20000000 },
});

export default UploadImage;

