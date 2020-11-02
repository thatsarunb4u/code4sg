import Router from 'express';
import {create, searchPostsByUserID, getByPostID, upvote, downvote, deletePost, flag, getPosts} from '../service/post-service';

const router = Router();

router.get('/', (req,res) => {
    let response = getPosts();
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
});

router.get('/byuserid/:userId', (req,res) => {
    let response = searchPostsByUserID(req.params.userId);
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
});
router.put('/', (req,res) => {
    res.send('Received a put request.');
});

router.get('/bypostid/:postId', (req,res) => {
    let response = getByPostID(req.params.postId);
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
});
router.put('/', (req,res) => {
    res.send('Received a put request.');
});

router.get('/:postId/upvote', (req,res) => {
    let response = upvote(req.params.postId);
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
});

router.get('/:postId/downvote', (req,res) => {
    let response = downvote(req.params.postId);
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
});

router.get('/:postId/flag', (req,res) => {
    let response = flag(req.params.postId);
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
});

router.put('/', (req,res) => {
    res.send('Received a put request.');
});

router.post('/', (req,res) => {
    let response = create(req.body);
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
});

router.delete('/:postId', (req,res) => {
    let response = deletePost(req.params.postId);
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
});

export default router;  