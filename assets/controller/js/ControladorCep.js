class ControladorCep {
  constructor(cep) {
    this.campoCep = $("#cep");
    this.cepView = new VisualizadorCep(this.cep);
    this.cep = cep;
    this.gerenciaCep = new GerenciadorDeCep(this.cep);
  }

  completaEnderecoForm() {
    this.cepView.renderizaCep(this.dadosApi);
  }

  chamarApi() {
    if (this.gerenciaCep.getCepValidado()) {
      this.gerenciaCep.apiCep();
      setTimeout(() => {
        this.dadosApi = this.gerenciaCep.getDadosApi();
        this.completaEnderecoForm();
      }, 1000);
    }
  }

  alertaElemento() {
    if (this.gerenciaCep.getCepValidado()) {
      this.cepView.mudaClasse(this.campoCep, "border-success", "border-danger");
    } else {
      this.cepView.mudaClasse(this.campoCep, "border-danger", "border-success");
    }
  }
}

const btnCep = $("#btn-cep");
const inputCep = $("#cep");

inputCep.on("input", () => {
  const controladorCep = new ControladorCep(inputCep.val());
  controladorCep.alertaElemento();
});

btnCep.on("click", (event) => {
  event.preventDefault();
  const controladorCep = new ControladorCep(inputCep.val());
  controladorCep.chamarApi();
});
