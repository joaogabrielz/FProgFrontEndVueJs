

Vue.createApp({
  // el: '#app',
  components: {
    AppBtn,
  },
  data: () => {
    return {
      titulo: '',
      clientes: [],
      inputCliente: '',
    }
  },
  methods: {
    add() {
      this.clientes.push(this.inputCliente);
    },
    remover(index) {
      this.clientes.splice(index, 1);
    },
    btnClickado (msg) {
      alert(msg)
    }
  }

}).mount('#app');