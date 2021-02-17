import express from 'express';
import 'dotenv/config';
import routes from './route';
import {testConnection, getTestRecords} from './repo/db-client';
import {authenticate, registerUser} from './service/auth-service';
import {getUserInfoByUsername, getUserInfoByID, resetPassword} from './service/user-service';
import cors from 'cors';
import bodyParser from 'body-parser';
import {validateToken} from './middleware/auth';
import jwt from 'jsonwebtoken';
import {secret} from './config/app-config';



const app = express();

global.activeUsers = new Map();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(bodyParser.json())
app.use(cors());

app.use(validateToken);
app.use('/post', routes.posts);
app.use('/user', routes.users);
app.use('/tag', routes.tags);


app.listen(process.env.PORT, () => {
    console.log("SaltRice backend server started at port 3000...");
});

app.get('/testDB', (req,res) => {
    //req.query['']
    let response = testConnection();
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
    
});

app.get('/test', (req,res) => {
    //req.query['']
    let response = getTestRecords();
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
    
});


app.get('/search/:indexName', (req,res) => {
    //req.query['']
    let response = searchDocument(req.params.indexName, req.query['q']);
    response.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.send(err);
    });
    
});

app.post('/login', async (req,res) => {
    
    console.log(req.body);

    let userRecord = await authenticate(req.body);

    if(userRecord && Object.keys(userRecord).length > 0) {
        //set jwt token here
        var token = jwt.sign({ username: userRecord.UUID, id: userRecord.userID, nickname: userRecord.nickname }, secret, {
            expiresIn: 1800 // 30 minutes
          });
        activeUsers.set(userRecord.userID, userRecord);
        res.status(200).send({access_token: token, principal: userRecord});
    }else {
        res.status(401).send({
            "error": "Access denied"
        })
    }
    
});

app.post('/logout', async (req,res) => {
    
    console.log(req.body);
    activeUsers.delete(req.principal.id);

    res.status(200).send({access_token: null, principal: null});
    
});

app.post('/resetPassword', async (req,res) => {
    console.log(req.body);

    let userRecord = await getUserInfoByUsername(req.body.username)
    if(userRecord === undefined){
        console.log("User doesn't exists");
        res.status(409).send({
            "error": "User doesn't exists"
        })
    } else {
        let result = await resetPassword(userRecord.userID, req.body.password);
        console.log(result)
        if (result === undefined) {
            res.status(200).send();
        }
    }
    
})

app.post('/register', async (req,res) => {
    
    console.log(req.body);

    let userRecord = await getUserInfoByUsername(req.body.username)
    

    if(userRecord && Object.keys(userRecord).length > 0) {
        
        res.status(409).send({
            "error": "User already exists"
        })
        
        
    }else {
        let result = await registerUser(req.body);
        console.log(result)
        if (result && Object.keys(result).length > 0) {
            //set jwt token here
            var token = jwt.sign({ username: result.UUID, id: result.userID, nickname: result.nickname }, secret, {
                expiresIn: 1800 // 30 minutes
            });

            activeUsers.set(result.userID, userRecord);
            res.status(200).send({access_token: token, principal: result});
        }else {
            res.status(500).send({
                message: "Internal error occured trying to register."
            });
        }
        
        
    }
    
});
