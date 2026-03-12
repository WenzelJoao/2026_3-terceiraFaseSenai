class Funcionario {
    nome: string
    salario: number

    constructor(nome:string, salario:number){
        this.nome = nome, this.salario = salario
    }

    calcularSalario(): number{
        return this.salario
    }
}

class Programador extends Funcionario {
    calcularSalario(): number {
        const bonus = this.salario * 0.30
        return this.salario + bonus
    }
}
class Designer extends Funcionario {
    calcularSalario(): number {
        const bonus = this.salario * 0.25
        return this.salario + bonus
    }
}

const dev = new Programador("Junior", 3000)
const desi = new Designer("Flavio", 2500)

console.log(`Funcionario: ${dev.nome}`);
console.log(`Salario: ${dev.salario}`);
console.log(`Salario com bonus: ${dev.calcularSalario()}`);
console.log("---------------------------------");
console.log(`Funcionario: ${desi.nome}`);
console.log(`Salario: ${desi.salario}`);
console.log(`Salario com bonus: ${desi.calcularSalario()}`);


