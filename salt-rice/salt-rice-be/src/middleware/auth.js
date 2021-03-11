import jwt from 'jsonwebtoken';
import {secret} from '../config/app-config';

let validateToken = (req,res,next) => {
    console.log(req.originalUrl);
    if (req.originalUrl === '/login' || req.originalUrl === '/register' || req.originalUrl === '/resetPassword' || req.originalUrl === "/post" || req.originalUrl.includes("/post?sort") || req.originalUrl.includes("/post/bytagortitle/") || req.originalUrl.includes("/post/bypostid") || req.originalUrl.includes("/user/byID")) {
        return next();
    } 
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
        message: "No token provided!"
        });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Unauthorized!"
          });
        }
        req.userId = decoded.username;
        console.log(decoded);
        
        req.principal = decoded;
        //console.log("Active users:"+ activeUsers.length)
        console.log("Authenticated:"+decoded)
        next();
      });

};

export {
    validateToken
}