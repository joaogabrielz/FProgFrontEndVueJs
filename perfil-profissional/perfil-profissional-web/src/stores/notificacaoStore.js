import { defineStore } from "pinia";
import { buscarNotificacao, buscarNotificacoesPerfil, marcarNotificacaoLida,  } from "../api/notificacao";

export const useNotificacaoStore = defineStore('notificacao', {
  state: () => ({
    notificacoes: [],
  }),
  actions: {
    async buscarNotificacoesPerfil(perfilId) {
      this.notificacoes = await buscarNotificacoesPerfil(perfilId);
    },
    async buscarNotificacao(notificacaoId) {
      return await buscarNotificacao(notificacaoId);
    },
    async marcarNotificacaoLida(notificacaoId) {
      return await marcarNotificacaoLida(notificacaoId);
    },
    
  }
})