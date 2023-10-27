export default class Modal {
  constructor(abrir, fechar, containerModal) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callbacl para fazer
    // referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // add o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal(event);
  }

  // fecha o modal ao clicar do lado de fora
  clickForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // add os eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
