import Router from 'express';
import {registerUser, getUserInfoByNRIC, getUserInfoByID, getUserInfoByUUID, flagUser} from '../service/user-service';


const router = Router();


router.get('/byID/:userId', async (req,res) => {
    console.log('Getting user information by ID')
    //NRIC
    let userId = req.params.userId
    
    console.log(userId)

    if (isNaN(userId)) {
        res.send("Invalid ID.")
    }else {
        let userInfo = await getUserInfoByID(userId)
        res.send(userInfo);
    }
    
});

router.get('/byNRIC/:nric', async (req,res) => {
    console.log('Getting user information by NRIC')
    //NRIC
    let NRIC = req.params.nric
    
    console.log(NRIC)

    let userInfo = await getUserInfoByNRIC(NRIC)
    
    res.send(userInfo);
});

router.get('/byUUID/:uuid', async (req,res) => {
    console.log('Getting user information by UUID')
    //UUID
    let UUID = req.params.uuid
    
    console.log(UUID)

    let userInfo = await getUserInfoByUUID(UUID)
    
    res.send(userInfo);
});


router.put('/register', async (req,res) => {
    console.log('Registering new user')
    console.log(req.body)
    
    

    res.send(registerUser(req.body));

});

router.put('/flag/:userId', async (req,res) => {
    console.log('Flagging User')

    let userId = req.params.userId
    console.log(userId)
    
    await flagUser(userId)

    res.send('Flagged USER.');

});

router.post('/delete', (req,res) => {
    //Do not enable delete since all the posts and comments written by user will be orphan.
    /* console.log('Deleting user')
    console.log(req.body)
    
    deleteUser(req.body)

    res.send('Deleted USER.'); */
    res.send('Delete user not allowed')

});

/* 
router.delete('/', (req,res) => {
    res.send('Received a DELETE request.');
});
 */
export default router;