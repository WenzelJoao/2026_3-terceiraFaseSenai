class Produto {
    nome: string
    preco: number

    constructor(nome: string, preco: number) {
        this.nome = nome, this.preco = preco
    }
}

class Categoria{
        nome: string
        desconto: number
        

        constructor(nome:string, desconto:number){
            this.nome = nome, this.desconto = desconto
        }

        calcularPrecoComDesconto(Produto:Produto): number {
            const precoComDesconto = (Produto.preco * (this.desconto / 100))
            return precoComDesconto
        }

    
}

const bermuda = new Produto('Bermuda', 50)
const verao = new Categoria('Verão', 10)

console.log(`Produto ${bermuda.nome}`);
console.log(`Preço ${bermuda.preco}`);
console.log(`Desconto ${verao.desconto}%`);
// console.log(`Preço com desconto %`);


