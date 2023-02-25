<template>
  <h1 class="text-center title">Login</h1>
  <form class="form-login">
    <input v-model="usuario.email" type="email" placeholder="Email">
    <input v-model="usuario.senha" type="password" placeholder="Senha">
    <button @click="logar()" type="button">Entrar</button>
    <a @click="novaConta" class="mt-5 linkLogin"> Criar Minha conta</a>
  </form>
</template>

<script>
import { mapState, mapActions } from 'pinia';

import { usePerfilStore } from '../stores/perfilStore';
import { useAlertaStore } from '../stores/alertaStore';


export default {
  data: () => ({
    usuario: {},
  }),
  methods: {
    ...mapActions(usePerfilStore, ['login']),
    ...mapActions(useAlertaStore, ['abrir', 'exibirErro']),
    async logar() {
      try {
        await this.login(this.usuario);
        this.$router.push('/home');
      } catch (error) {
        console.error(error.body.message);
        this.exibirErro(error.body.message);
      }
    },
    novaConta() {
      this.$router.push('/novaConta');
    }
  }
}
</script>

<style>

</style>