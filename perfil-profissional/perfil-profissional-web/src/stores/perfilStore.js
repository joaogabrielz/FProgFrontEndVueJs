import { defineStore } from "pinia";
import { login } from "../api/login";
import { atualizarPerfil, buscarPerfil, cadastrar, conectarPerfis, listarUltimosPerfis } from "../api/perfil";

export const usePerfilStore = defineStore('perfil', {
  state: () => ({
    usuarioLogado: {},
    ultimosPerfis: [],
  }),
  // getters: {
  //   getUsuarioLogado (state) {
  //     return state.usuarioLogado;
  //   }
  //},
  actions: {
    async login(usuario) {
      this.usuarioLogado = await login(usuario);
    },

    async cadastrar(perfil) {
      await cadastrar(perfil);
    },

    async listarUltimosPerfis() {
      this.ultimosPerfis = await listarUltimosPerfis();
    },

    async buscarPerfilLogado() {
      return await buscarPerfil(this.usuarioLogado.perfil);
    },
    
    async buscarPerfil(perfilId) {
      return await buscarPerfil(perfilId);
    },

    async atualizarPerfil(perfil) {
      return await atualizarPerfil(perfil);
    },

    async conectarPerfis(idPerfilDestino) {
      return await conectarPerfis(this.usuarioLogado.perfil, idPerfilDestino);
    },

  }
})