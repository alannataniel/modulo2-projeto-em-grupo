class ControladorTamanhoInput {
  verificaCadastro() {
    const arrDados = [
      $("#nome").val(),
      $("#email").val(),
      $("#senha").val(),
      $("#confirma").val(),
      $("#rg").val(),
      $("#cep").val(),
      $("#estado").val(),
      $("#cidade").val(),
      $("#bairro").val(),
      $("#rua").val(),
      $("#numero").val(),
      $("#complemento").val(),
    ];
    
    return arrDados.map((dado) => dado.length != 0);
  }
}
