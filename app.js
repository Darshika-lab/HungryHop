import express from 'express';
import Routes from './src/Routes/router.js'
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api' , Routes);


export  function gear (a){
    res.send("Gear 1");
}

export  function gear (a,b){
    res.send("Gear 2");
}

gear(a);
gear(a,b);

app.listen(PORT, () => {
    console.log(`Server is Connected on ${PORT}`);
});

