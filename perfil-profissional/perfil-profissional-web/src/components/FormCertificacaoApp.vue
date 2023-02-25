<template>
  <button v-show="!showEducacao" @click="showEducacao = true" type="button">Nova</button>
  <div v-if="showEducacao">

    <label for="instituicao">Instituição de Ensino</label>
    <input v-model="certificacao.instituicao" type="text" placeholder="Ex: Senac" id="instituicao">

    <label for="titulo">Data de ingresso</label>
    <input v-model="certificacao.titulo" type="text" placeholder="Ex: Técnico em informática" id="titulo">

    <label for="cargaHoraria"></label>
    <input v-model="certificacao.cargaHoraria" type="number" placeholder="Ex: 1200" id="cargaHoraria">

    <button @click="showEducacao = false" type="button">Cancelar</button>
    <button @click="adicionarCertificacao" type="button">Adicionar</button>
  </div>
</template>

<script>

export default {
  props: {
    perfil: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    certificacao: {},
    showEducacao: false,
  }),
  methods: {
    adicionarCertificacao() {
      this.perfil.certificacoes.push(this.certificacao);
      this.certificacao = {};
      this.showEducacao = false;
    },
  }
}
</script>