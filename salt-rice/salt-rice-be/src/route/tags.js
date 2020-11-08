import Router from 'express';
import {searchTag} from '../service/tag-service';

const router = Router();

router.get('/byname/:querystr', (req,res) => {
    let response = searchTag(req.params.querystr);
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
});

export default router;  