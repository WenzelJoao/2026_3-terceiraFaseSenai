import Express from 'express'
import { log } from 'node:console';

const app = Express();

const port = 3000

app.get('/', (requisicao, resposta)=>{
    console.log(requisicao);
    
    resposta.send("Hello word")
})

// Endpoints usuarios 

app.get('/usuarios', (req, res) =>{

})

app.listen(port, ()=>{
    console.log("Servidor esta de pé :)");
    
})