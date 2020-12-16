import express from 'express';
import 'dotenv/config';


const app = express();
app.use(express.static('public'));

app.listen(process.env.PORT, () => {
    console.log("SaltRice web server started at port:", process.env.PORT);
});


