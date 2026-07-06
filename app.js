import express from 'express';
import Routes from './src/Routes/router.js'
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api' , Routes);







app.listen(PORT, () => {
    console.log(`Server is Connected on ${PORT}`);
});

