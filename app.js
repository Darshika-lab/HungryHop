import express from 'express';
import Routes from './src/Routes/router.js'
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api' , Routes);
//changes

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});
app.listen(PORT, () => {
    console.log(`Server is Connected on ${PORT}`);
});

