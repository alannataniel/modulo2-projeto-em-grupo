class ControladorInput {
  constructor(input, campoInput, confirmaCampo) {
    this.campoInput = campoInput;
    this.alteraDom = new ManipuladorDom();
    this.input = input;
    this.confirmaCampo = confirmaCampo;
  }

  alertaElemento() {
    if (this.confirmaCampo) {
      this.alteraDom.mudaClasse(this.campoInput,"border-success","border-danger");
    } else {
      this.alteraDom.mudaClasse(this.campoInput,"border-danger","border-success");
    }
  }
}

const inputEmail = $("#email");
const inputConfirmaSenha = $("#confirma");
const inputRg = $("#rg");

inputEmail.on("input", () => {
  const email = inputEmail.val();
  gerenciadorDeEmail = new GerenciadorDeEmail();
  confirmaEmail = gerenciadorDeEmail.validaEmail(email);

  const controlaEmail = new ControladorInput(email, inputEmail, confirmaEmail);
  controlaEmail.alertaElemento();
});

inputConfirmaSenha.on("input", () => {
  const senha = $("#senha").val();
  const repetirSenha = inputConfirmaSenha.val();

  gerenciadorSenha = new GerenciadorDeSenha();
  confirmaSenha = gerenciadorSenha.confirma(senha, repetirSenha);

  const controlaSenha = new ControladorInput(repetirSenha, inputConfirmaSenha, confirmaSenha);
  controlaSenha.alertaElemento();
});

inputRg.on("input", () => {
  const rg = inputRg.val();

  gerenciadorRg = new GerenciadorDeRg();
  confirmaRg = gerenciadorRg.validaRg(rg);

  const controlaRg = new ControladorInput(rg, inputRg, confirmaRg);
  controlaRg.alertaElemento();
})