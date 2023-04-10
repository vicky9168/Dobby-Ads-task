import  express  from "express"; 
import { imgpost,imgget,search } from "../controllers/userimage.js";
import upload from "../middleware/upload.js";

// import { getAllUsers } from '../controllers/users.js'

const router=express.Router();

router.post('/userimage', imgpost) 
router.get('/userimage', imgget)
router.get('/search/:name',upload.single('testimage'), search)


export default router
