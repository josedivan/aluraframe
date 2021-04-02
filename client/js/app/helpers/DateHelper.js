class DateHelper {
  textoParaData(texto) {
    // Este é método
    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2)),
    );
  }
  dataParaTexto(data) {

data.getDate() 

+ "/" + (data.getMounth()+1)
+ "/" + (data.getFullyear()
  }
  // teste

  let diaMesAno =
  negociacao.data.getDate() +
  "/" +
  (negociacao.data.getMonth() + 1) +
  "/" +
  negociacao.data.getFullYear();
console.log(diaMesAno);
}
}


