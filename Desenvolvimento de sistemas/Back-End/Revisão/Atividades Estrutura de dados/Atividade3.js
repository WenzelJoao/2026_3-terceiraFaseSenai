// Exercício 3 — Validador de Parênteses
// Enunciado
// Verifique se uma expressão possui parênteses balanceados:
// ((a+b)*c)
// Discussão Guiada
// Quando empilha?
// Quando desempilha?
// Como detecta erro?
// Complexidade Esperada
// Operação Complexidade
// Percorrer string O(n)
// push/pop O(1)
// Complexidade total: O(n)


function validarBalanceamento(expressao){
    const pilha = []
    const pares = {
        ")" : "(",
        "]" : "[",
        "}" : "{",
    }

    const quemAbre = new Set(["(", "[", "{"])

    for(const caractere of expressao){
        if (quemAbre.has(caractere)) pilha.push(caractere) 
        else if(caractere in pares){
            if(pilha.length === 0) return false
            const topo = pilha.pop()
            if(topo !== pares[caractere]) return false
        } 
    }
    return pilha.length === 0
}

console.log(validarBalanceamento("((a+b)(*c)"));
