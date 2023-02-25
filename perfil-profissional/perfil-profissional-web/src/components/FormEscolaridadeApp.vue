<template>
  <button v-show="!showEducacao" @click="showEducacao = true" type="button">Nova</button>
  <div v-if="showEducacao">

    <label for="instituicao">Instituição de Ensino</label>
    <input v-model="educacao.instituicao" type="text" placeholder="Instituicao" id="instituicao">

    <label for="ingresso">Data de ingresso</label>
    <input v-model="educacao.ingresso" type="date" placeholder="Data de ingresso" id="ingresso">

    <label for="conclusao">Data de conclusão</label>
    <input v-model="educacao.conclusao" type="date" placeholder="Data de conclusão" id="conclusao">

    <label for="nivelEscolaridade">Nível de Escolaridade</label>
    <select v-model="educacao.nivelEscolaridade" id="nivelEscolaridade">
      <option value="Ensino Fundamental">Ensino Fundamental</option>
      <option value="Ensino Médio">Ensino Médio</option>
      <option value="Ensino Superior">Ensino Superior</option>
      <option value="Ensino Pós-graduação">Ensino Pós-graduação</option>
      <option value="Mestrado">Mestrado</option>
      <option value="Doutorado">Doutorado</option>
    </select>
    <button @click="showEducacao = false" type="button">Cancelar</button>
    <button @click="adicionarEducacao" type="button">Adicionar</button>
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
    educacao: {},
    showEducacao: false,
  }),
  methods: {
    adicionarEducacao() {
      this.perfil.educacao.push(this.educacao);
      this.educacao = {};
      this.showEducacao = false;
    },
  }
}
</script>