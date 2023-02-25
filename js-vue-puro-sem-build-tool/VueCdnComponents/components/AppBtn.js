const AppBtn = {
  props: {
    texto: {
      type: String,
      default: 'texto padrao'
    }
  },
  data: () => {
    return {
      titulo: 'Component Button¨ ',
    }
  },
  methods: {
    alerte() {
      //alert('Clicked On: ' + this.titulo + ' - ' + this.texto);
      this.$emit('btnClickado', 'botao ' + this.texto + ' foi clicado!');
    }
  },
  template:`
  <button 
  style='background-color: black; color: white; border: none; border-radius: 5px; padding: 10px 5px; font-weight: bold; cursor: pointer' 
  @click="alerte()">
    {{ texto }}
  </button>
  `
}