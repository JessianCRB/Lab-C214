class Onibus extends Veiculo {
  assentos = 20;

  constructor(placa, ano, assentos){
    super(placa, ano);
    this.assentos = assentos;
  }


  setAssentos(novosAssentos){
    this.assentos = novosAssentos;
  }

  exibirDados(){
    console.log("Assentos", this.assentos);
  }
}

var onibus = new Onibus();
onibus.setAssentos(24);
onibus.exibirDados();