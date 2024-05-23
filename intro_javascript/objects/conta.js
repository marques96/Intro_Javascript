const conta = {
  titular: "Rocky Balboa",
  saldo: 2000,
  agencia: 2010,
  numero: 1515200524,
  dataCriacao: new Date(),
  depositar: function (valor) {
    this.saldo += valor;
  },

  sacar: function (valor) {
    this.saldo -= valor;
  },

  //Definição de método mostrar
  mostrarDetalhe: function () {
    const saldoFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.saldo);

    const dataFormatada = new Intl.DateTimeFormat("pt-BR").format(
      this.dataCriacao
    );

    return `Titular: ${this.titular} \nSaldo: ${saldoFormatado} \nAgencia: ${this.agencia} \nConta Corrente: ${this.numero}\nData da criacao: ${dataFormatada}\n`;
  }, //Fim da definição do método
};

console.log(conta.mostrarDetalhe());
conta.depositar(500);
console.log(conta.mostrarDetalhe());
conta.sacar(250);
console.log(conta.mostrarDetalhe());
