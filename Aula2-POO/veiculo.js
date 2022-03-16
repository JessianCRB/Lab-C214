function Veiculo() {
  var placa ='1z7a5q9a';
  var ano = 2018;

    this.setarPlaca = setPlaca;
    this.setarAno = setAno;
    this.displayInfo = exibirDados;


  function setPlaca(novaPlaca){
    placa = novaPlaca;
  }

  function setAno(novoAno){
    ano = novoAno;
  }

  function exibirDados(){
    console.log("Placa", placa);
    console.log("Ano", ano);
  }
}



var veiculo = new Veiculo();
veiculo.setarPlaca('aaaaaaa');
veiculo.setarAno(2022);
veiculo.displayInfo();
