class Caminhão extends Veiculo {
  eixos = 2;

  constructor(placa, ano, eixos){
    super(placa, ano);
    this.eixos = eixos;
  }


  setEixos(novosEixos){
    this.eixos = novosEixos;
  }

  exibirDados(){
    console.log("Eixos", this.eixos);
  }
}

var caminhao = new Caminhão();
caminhao.setEixos(4);
caminhao.exibirDados();