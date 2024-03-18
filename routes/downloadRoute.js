import Express from "express";
import downlodController from "../controlers/downloadController.js"
import ViewModel from "../models/viewModel.js";
const router = Express.Router()

// router.get('/download-post', downlodController.downloadPost);

router.get('/data', async (req, res) => {
    // const data = await ViewModel.create({ useDownload: 0, visit: 0 });

    // const deleter = data.map((val) => {
    //     return val._id
    // })
    // await ViewModel.deleteMany({ _id: deleter });

    const data = await ViewModel.find().select('-_id -__v');
    res.send(data[0])
});

router.post('/update-visit', async (req, res) => {
    try {
        await ViewModel.updateOne({ _id: '65f75cca34729e6c76b38b46' }, { $inc: { visit: 1 } });
        return res.send(true)
    } catch (error) {
        console.log(error);
        return false
    }
})

router.post('/', downlodController.viewPost);

export default router