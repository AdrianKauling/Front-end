// Regas

//No outono, 5% de desconto
//No verão, 6% de desconto
//No inverno, 8% de desconto
//Na primavera 5% de desconto
// Roupas com tamanho G não tem desconto
//Roupas com tamanho P tem desconto de 9% em qualquer estação do ano

const ListaDeRoupas = [
      {
            roupa: "regata",
            preco: 30,
            estacaoQueEVendida: "verao",
            tamanho: "p"
      },
      {
            roupa: "bermuda",
            preco: 20,
            estacaoQueEVendida: "verao",
            tamanho: "gg"
      },
      {
            roupa: "corta vento",
            preco: 120,
            estacaoQueEVendida: "inverno",
            tamanho: "g"
      },
      {
            roupa: "calça moletom",
            preco: 100,
            estacaoQueEVendida: "inverno",
            tamanho: "gg"
      },
      {
            roupa: "saia",
            preco: 40,
            estacaoQueEVendida: "primavera",
            tamanho: "p"
      }
]

let valorFinalDaRoupa

ListaDeRoupas.forEach(roupa => {

      if (roupa.tamanho === "g") {
            valorFinalDaRoupa = roupa.preco
      }


      if (roupa.EstacaoQueEVendida === "outono" || roupa.EstacaoQueEVendida === "primavera") {
            valorFinalDaRoupa = Roupa.preco - (roupa.preco * 0.05)
      }

      if (roupa.EstacaoQueEVendida === "Verao") {

            valorFinalDaRoupa = Roupa.preco - (roupa.preco * 0.06)

      }

      if (roupa.EstacaoQueEVendida === "Inverno") {

            valorFinalDaRoupa = Roupa.preco - (roupa.preco * 0.08)

      }

      if (roupa.tamanho === 'p') {

            valorFinalDaRoupa = roupa.preco - (roupa.preco * 0, 09)

      }

      console.log(' ------------------------ ')
      console.log(' ')
      console.log(`A ${roupa.roupa} custa R$${valorFinalDaRoupa},00 na estação do ano ${roupa.estacaoQueEVendida}, seu preço normal é R$${roupa.preco},00`)
      console.log(' ')
      

})