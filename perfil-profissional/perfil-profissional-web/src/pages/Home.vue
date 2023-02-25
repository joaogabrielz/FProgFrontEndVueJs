<template>
  <h1>Home</h1>
  <h2 v-if="getFirstName">Olá {{ getFirstName }}</h2>

  <section>
    <h3>Últimos perfis cadastrados</h3>
    <TabelaPerfisApp />
  </section>

  <section>
    <h3>Últimas notificações</h3>
    <TabelaNotificacoesApp />
  </section>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore';
import { useNotificacaoStore } from '../stores/notificacaoStore';

import TabelaPerfisApp from '../components/TabelaPerfisApp.vue';
import TabelaNotificacoesApp from '../components/TabelaNotificacoesApp.vue';

export default {
  components: {
    TabelaPerfisApp,
    TabelaNotificacoesApp,
  },
  computed: {
    ...mapState(usePerfilStore, ['usuarioLogado']),
    ...mapState(useNotificacaoStore, ['notificacoes']),
    getFirstName() {
      if(this.usuarioLogado.nome) {
        return this.usuarioLogado.nome.trim().split(' ')[0];
      }
    }
  },
  methods: {
    ...mapActions(usePerfilStore, ['listarUltimosPerfis']),
    ...mapActions(useNotificacaoStore, ['buscarNotificacoesPerfil']),
  },
  mounted() {
    this.listarUltimosPerfis();
    this.buscarNotificacoesPerfil(this.usuarioLogado.perfil);
  }
}
</script>

<style>

</style>