import express from 'express'

const app = express()

const PORT = 3000

app.get('/', (req, res) =>{
    res.send(`API rodando na porta: ${PORT}`)
})

app.listen(PORT, () =>{
    console.log();
    
})