import express from 'express'

const app = express()
const PORT = 3000
app.use(express())

app.get("/", (req, res)=>{
    res.json('Hola mundo')
})

app.listen(PORT, () =>{
    console.log(`Aplicação rodando em: http://localhost:${PORT}`);
    
})