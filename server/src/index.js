import express from 'express';

import cors from 'cors'
import Books from './routes/books.js';

const PORT = 3000
const app = express();
app.use(express.json());
app.use(cors())

app.get('/ping', (req, res) =>{
    res.send('Pong!')
})

app.use('/api', Books)

app.listen(PORT, () => console.log(`Server is running in: http://localhost:3000`))