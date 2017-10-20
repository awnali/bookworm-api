import express from 'express'
import path from 'path'

const app = express();
app.post('/api/auth', (req,res) => {
    setTimeout(() => res.status(400).json({errors:{global: "Invalid Credentials"}}), 3000);
});
app.get('/*',(req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(8080,() => console.log('bookworm api is working on port: 8080'));