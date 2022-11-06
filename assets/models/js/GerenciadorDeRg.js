class GerenciadorDeRg {
  validaRg(rg) {
    const validacao = /^[0-9]{9}$/;

    if (rg.match(validacao)) {
      this.rg = rg;
      return true;
    } else {
      return false;
    }
  }
}
