<template>
  <h1>Detalhe notificação</h1>
  <div>
    <strong>Titulo:</strong> {{ notificacao.titulo }}
  </div>
  <div>
    <strong>Descricao: </strong> {{ notificacao.descricao }}
  </div>
  <div>
    <strong>Tipo: </strong> {{ notificacao.tipo }}
  </div>
  <div>
    <strong>Lida: </strong> {{ notificacao.lida ? 'Sim' : 'Não' }}
  </div>
  <div>
    <strong>Remetente: </strong> {{ remetente.nome }}
  </div>
  <div>
    <strong>Destinatario: </strong> {{ destinatario.nome }}
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useNotificacaoStore } from '../stores/notificacaoStore';
import { usePerfilStore } from '../stores/perfilStore';

export default {
  data: () => ({
    notificacao: {},
    remetente: {},
    destinatario: {},
  }),
  methods: {
    ...mapActions(useNotificacaoStore, ['buscarNotificacao', 'marcarNotificacaoLida']),
    ...mapActions(usePerfilStore, ['buscarPerfil']),
  },
  async mounted() {
    this.notificacao = await this.buscarNotificacao(this.$route.params.id);
    this.remetente = await this.buscarPerfil(this.notificacao.remetente);
    this.destinatario = await this.buscarPerfil(this.notificacao.destinatario);
    if (!this.notificacao.lida) {
      await this.marcarNotificacaoLida(this.notificacao._id);
      this.notificacao.lida = true;
    }
  }
}
</script>