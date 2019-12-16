const env = require('dotenv/config');
const app = require('./app');

// console.log(process.env.MY_SECRET , process.env.MONGO_URL , process.env.PORT);
app.listen(process.env.PORT || '172.0.0.23' , (err) => {
    if(err) {
        consolr.log('error' + err);
    } else {
        console.log('started');
    }
})