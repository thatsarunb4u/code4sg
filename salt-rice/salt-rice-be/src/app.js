import express from 'express';
import 'dotenv/config';
import routes from './route';
import {testConnection, getTestRecords} from './repo/db-client'
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(bodyParser.json())
app.use(cors());

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

