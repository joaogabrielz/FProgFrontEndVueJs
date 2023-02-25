<template>
  <h1>Notificações</h1>
  
  <TabelaNotificacoesApp />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useNotificacaoStore } from '../stores/notificacaoStore';
import { usePerfilStore } from '../stores/perfilStore';

import TabelaNotificacoesApp from '../components/TabelaNotificacoesApp.vue';


export default {
  components: {
    TabelaNotificacoesApp,
  },
  computed: {
    ...mapState(usePerfilStore, ['usuarioLogado']),
  },
  methods: {
    ...mapActions(useNotificacaoStore, ['buscarNotificacoesPerfil'])
  },
  async mounted() {
    await this.buscarNotificacoesPerfil(this.usuarioLogado.perfil);
  }
}
</script>