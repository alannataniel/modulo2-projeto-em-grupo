class ControladorAlertas extends ControladorTamanhoInput {
  constructor() {
    super();
    this.alertaSucesso = $("#msg-sucesso");
    this.alertaErro = $("#msg-erro");
    this.btn = $("#btn-cadastro");
    this.esconde = "hidden";
    this.alteraDom = new ManipuladorDom();
  }

  mostraMensagem(confirmador) {
    if (confirmador) {
      this.alteraDom.colocaAtributo(this.alertaErro, this.esconde, true);
      this.alteraDom.removeAtributo(this.alertaSucesso, this.esconde);
    } else {
      this.alteraDom.colocaAtributo(this.alertaSucesso, this.esconde, true);
      this.alteraDom.removeAtributo(this.alertaErro, this.esconde);
    }
  }

  mostraMensagemIncompleta(verificador, confirmador) {
    if (verificador) {
      this.mostraMensagem(confirmador);
    } else {
      this.alteraDom.colocaAtributo(this.alertaErro, this.esconde, true);
      this.alteraDom.colocaAtributo(this.alertaSucesso, this.esconde, true);
    }
  }
}
