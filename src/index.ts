import express from "express";
import alumnosRouter from './routes/alumnos'

const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json

const PORT = 3000;

app.use('/api/alumnos', alumnosRouter);

app.listen(PORT, () => {
    console.log("listening on port ${PORT}");
});
