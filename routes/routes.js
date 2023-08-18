const exp = require('express')
const router = exp.Router()
const save = require('../controller/index')
const multer = require('../middleware/middleware')
const routes = (index)=>
{
    router.post('/uploadfile',multer.single("upload"),save.importuser);
    router.post('/aadhar',save.getuser);
    router.post('/update',save.alldetails);
    router.post('/path',save.detail);
    router.post('/updateall',save.update);
    router.post('/roll',save.onrollcount); 
    router.post('/resign',save.resigncount)
    index.use('/api',router)
}
module.exports = routes 