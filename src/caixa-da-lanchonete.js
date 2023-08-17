// class CaixaDaLanchonete {

//     calcularValorDaCompra(metodoDePagamento, itens) {
//         return "";
//     }

// }

//   | codigo    | descrição                   | valor   |
//   |-----------|-----------------------------|---------|
//   | cafe      | Café                        | R$ 3,00 |
//   | chantily  | Chantily (extra do Café)    | R$ 1,50 |
//   | suco      | Suco Natural                | R$ 6,20 |
//   | sanduiche | Sanduíche                   | R$ 6,50 |
//   | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
//   | salgado   | Salgado                     | R$ 7,25 |
//   | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
//   | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |



//console.log(cardapio)

class CaixaDaLanchonete {
    constructor() {
        this.cardapio = [
            {
                codigo: 'cafe',
                description: 'Café',
                valor: 3
        
            },
            {
                codigo: 'chantily',
                description: 'Chantily (extra do Café)',
                valor: 1.5
        
            },
            {
                codigo: 'suco',
                description: 'Suco Natural',
                valor: 6.2
        
            },
            {
                codigo: 'sanduiche',
                description: 'Sanduíche',
                valor: 6.5
        
            },
            {
                codigo: 'queijo',
                description: 'Queijo (extra do Sanduíche)',
                valor: 2
        
            },
            {
                codigo: 'salgado',
                description: 'Salgado',
                valor: 7.25
        
            },
            {
                codigo: 'combo1',
                description: '1 Suco e 1 Sanduíche',
                valor: 9.5
        
            },
            {
                codigo: 'combo2',
                description: '1 Café e 1 Sanduíche',
                valor: 7.5
        
            },
        ];
    }
    calcularValorDaCompra(metodoDePagamento, itens) {
        let cardapio = this.cardapio;
        //console.log(menu)

        const pagamentos = ['dinheiro', 'debito', 'credito']

        if (!pagamentos.includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!';
     
        } 

        let conta = 0
        function calculo(carrinho) {
                carrinho = [];

                //validar codigo

                itens = itens.map((item) => {
                return carrinho.push(item.split(','))
                })

                let aux =  true;

                for(let i = 0; i < carrinho.length; i++) {
                    let element = carrinho[i][0]
                    const itensComprados = cardapio.findIndex(itensComprados => itensComprados.codigo === element);
                    // console.log(itensComprados)

                    if (itensComprados === -1) {
                        return 'Item inválido!';
                    }


                    if (element === 'chantily'){
                        let principal = [];
                        for(let i = 0;i < carrinho.length; i++) {
                            const element = carrinho[i][0]

                            if(element === 'cafe') {
                                principal.push(element)
                            }
                            
                        }
                        if(principal.length < 1){
                            aux = false
                           return 'Item extra não pode ser pedido sem o principal'
                        }
                        
                    }

                    if(element === 'queijo') {
                        let principal = [];
                        for(let i = 0; i < carrinho.length; i++) {
                            const element = carrinho[i][0]

                            if(element === 'sanduiche') {
                                principal.push(element)
                            }

                        }
                        if(principal.length < 1){
                            aux = false
                            return 'Item extra não pode ser pedido sem o principal'
                        }
                    }

                    
                }

                if(aux == true){for(let i = 0; i < carrinho.length; i++) {
                    const element = carrinho[i][0];
                    let qtd = 0
                    qtd = carrinho[i][1]    
                    //console.log(element)
    
                    let resultado = cardapio.find(itensComprados => itensComprados.codigo === element);    
                    let valor = resultado.valor
                    if(qtd == 0) {
                       return 'Quantidade inválida!'
                    }
                    else {
                        valor *= qtd
                        conta += valor
                    }
                }}

        return true
        
        }

        //variavel para evitar erros
        //validar carrinho

        if(itens == 0){
            return 'Não há itens no carrinho de compra!'
        }

        const moderar = calculo(itens)

        
        if(moderar){
            if(metodoDePagamento == 'dinheiro') {
                conta -= ((conta * 5)/100)
                if(conta == 0) {
                    return moderar
                }
                return (`R$ ${conta.toFixed(2)}`).replace('.', ',')
            }
            if(metodoDePagamento == 'credito') {
                conta += ((conta * 3)/100)
                if(conta == 0) {
                    return moderar
                }
                return (`R$ ${conta.toFixed(2)}`).replace('.', ',')
            }
            if(metodoDePagamento == 'debito'){
                if(conta == 0) {
                    return moderar
                }
                return (`R$ ${conta.toFixed(2)}`).replace('.', ',')
            }
        }
        return moderar
        }
}
 new CaixaDaLanchonete()
     .calcularValorDaCompra('dinheiro', ['chantily,1', 'combo1,1'])

export { CaixaDaLanchonete };
