import jwt from 'jsonwebtoken';
import {secret} from '../config/app-config';

let validateToken = (req,res,next) => {
    if (req.originalUrl === '/login' || req.originalUrl === '/register') {
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
        next();
      });

};

export {
    validateToken
}