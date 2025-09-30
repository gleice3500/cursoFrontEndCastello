let produto1 = {
    nome: "Cadeira",
    preco: 350,
    estoque: 10,
    vender: function(){
        return this.estoque - 1;
    },
    repor: function(){
        return this.estoque + 1
    }
}


class Produto {
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    vender(){
        return this.estoque -= 1;
    }
    repor(){
        return this.estoque += 1;
    }
    exibirInfo(){
    console.log(`Produto: ${produto1.nome}, Preço: ${produto1.preco}, Estoque: ${produto1.estoque}`);
    }
}
 


