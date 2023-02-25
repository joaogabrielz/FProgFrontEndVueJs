<template>
  <h1>Meu perfil</h1>
  <h2>Informações pessoais</h2>
  
  <section>
    <form action="">
      <div>
        <label for="nome">Nome:</label>
        <input v-model="perfil.nome" type="text" id="nome" :disabled="inputsDisabled">
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="perfil.usuario.email" type="email" id="email" disabled>
      </div>
      <div>
        <label for="dataNascimento">Data de Nascimento:</label>
        <input v-model="perfil.dataNascimento" type="date" id="dataNascimento" :disabled="inputsDisabled">
      </div>
      <div>
        <label for="disponibilidadeMudanca">Disponibilidade de Mudança:</label>
        <input v-model="perfil.disponibilidadeMudanca" id="disponibilidadeMudanca" type="checkbox" :disabled="inputsDisabled">
      </div>
      <div>
        <label for="disponibilidadeHorario">Disponibilidade Horario:</label>
        <select id="disponibilidadeHorario" v-model="perfil.disponibilidadeHorario" :disabled="inputsDisabled">
          <option value="Meio Periodo">Meio Período</option>
          <option value="Integral">Integral</option>
        </select>
      </div>
      <div>
        <button @click="toggleEdicao" type="button">Habilitar Edição</button>
      </div>

      <fieldset>
        <legend>Escolaridade</legend>
        <FormEscolaridadeApp :perfil="perfil" />
          <section v-show="perfil.educacao">
              <TabelaEscolaridadeApp :educacao="perfil.educacao" />
            </section>
      </fieldset>

      <fieldset>
        <legend>Certificações</legend>
        <FormCertificacaoApp :perfil="perfil" />
          <section v-show="perfil.educacao">
              <TabelaCertificacaoApp :certificacoes="perfil.certificacoes" />
            </section>
      </fieldset>
     
    </form>
  </section>

  <div>
    <button @click="atualizar" type="button">Salvar Alterações</button>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore';
import FormEscolaridadeApp from '../components/FormEscolaridadeApp.vue';
import TabelaEscolaridadeApp from '../components/TabelaEscolaridadeApp.vue';
import FormCertificacaoApp from '../components/FormCertificacaoApp.vue';
import TabelaCertificacaoApp from '../components/TabelaCertificacaoApp.vue';

export default {
  components: {
    FormEscolaridadeApp,
    TabelaEscolaridadeApp,
    FormCertificacaoApp,
    TabelaCertificacaoApp,
  },
  data: () => ({
    perfil: {
      usuario: {},
    },
    inputsDisabled: true,
  }),
  methods: {
    ...mapActions(usePerfilStore, ['buscarPerfilLogado', 'atualizarPerfil']),
    toggleEdicao() {
      this.inputsDisabled = !this.inputsDisabled;
    },
    atualizar() {
      this.atualizarPerfil(this.perfil);
      this.inputsDisabled = true;
    },
  },
  async mounted() {
    this.perfil = await this.buscarPerfilLogado();
  },
}
</script>

<style>

</style>