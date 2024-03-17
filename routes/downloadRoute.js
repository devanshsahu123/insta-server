import Express from "express";
import downlodController from "../controlers/downloadController.js"
const router = Express.Router()

router.get('/download-post', downlodController.downloadPost);
router.get('/', downlodController.viewPost);

export default router