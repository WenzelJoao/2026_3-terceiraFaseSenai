
import { buscarLivroPorId } from "./bibliotecaService.js";
import { pool } from "./config.js";


async function main() {
    console.log(await buscarLivroPorId(1));

}

main().catch(erro =>
    console.log(erro)
).finally(async () => {
    await pool.end();
})