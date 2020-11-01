import Router from 'express';
import models from '../models';
import {registerUser, getUserInfoByNRIC, getUserInfoByID, getUserInfoByUUID} from '../service/user-service';


const router = Router();

router.get('/', (req,res) => {
    res.send(Object.values(models.users));
});

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


router.put('/register', (req,res) => {
    console.log('Registering new user')
    console.log(req.body)
    
    registerUser(req.body)

    res.send('Registered USER.');

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