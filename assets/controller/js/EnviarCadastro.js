class EnviarCadastro extends ControladorAlertas {
  constructor() {
    super();
    this.gerenciadorSenha = new GerenciadorDeSenha();
    this.gerenciaEmail = new GerenciadorDeEmail();
    this.gerenciaCep = new GerenciadorDeCep($("#cep").val());
    this.gerenciaRg = new GerenciadorDeRg();
  }

  verificaConfirmacaoSenha() {
    const senha = $("#senha").val();
    const confirmaSenha = $("#confirma").val();
    const confirmadorSenha = this.gerenciadorSenha.confirma(senha,confirmaSenha);
    return confirmadorSenha;
  }

  verificaConfirmacaoEmail() {
    const email = $("#email").val();
    const confirmadorEmail = this.gerenciaEmail.validaEmail(email);
    return confirmadorEmail;
  }

  verificaConfirmacaoCep() {
    const confirmadorCep = this.gerenciaCep.getCepValidado();
    return confirmadorCep;
  }

  verificaConfirmacaoRg() {
    const rg = $("#rg").val();
    const confirmadorRg = this.gerenciaRg.validaRg(rg);
    return confirmadorRg;
  }

  exibeMensagem() {
    const checkSenha = this.verificaConfirmacaoSenha();
    const checkEmail = this.verificaConfirmacaoEmail();
    const checkCep = this.verificaConfirmacaoCep();
    const checkRg = this.verificaConfirmacaoRg();
    const checkDados = this.verificaCadastro();

    const verificador = checkSenha && checkEmail && checkCep && checkRg;
    const confirmador = checkDados.indexOf("false") == -1;
    this.mostraMensagemIncompleta(confirmador, verificador);
  }
}

$("#btn-cadastro").on("click", (event) => {
  event.preventDefault();
  cadastroAlertas = new EnviarCadastro();
  cadastroAlertas.exibeMensagem();
});
