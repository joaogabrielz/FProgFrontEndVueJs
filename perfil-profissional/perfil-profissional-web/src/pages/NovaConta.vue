<template>
  <h1 class="text-center titulo">criar conta</h1>

  <form class="form-login">
    <label for="nome">Nome: </label>
    <input id="nome" v-model="perfil.nome" type="text" placeholder="Digite seu nome">

    <label for="dataNascimento">Data Nascimento: </label>
    <input id="dataNascimento" v-model="perfil.dataNascimento" type="date" placeholder="Data de nascimento">

    <div class="flex full-width items-center mb-5">
      <input class="mr-2" id="disponibilidadeMudanca" v-model="perfil.disponibilidadeMudanca" type="checkbox">
      <label for="disponibilidadeMudanca">Disponibilidade de Mudança: </label>
    </div>

    <div class="">
      <label for="disponibilidadeHorario">Disponibilidade de Horario: </label>
      <select id="disponibilidadeHorario" v-model="perfil.disponibilidadeHorario">
        <option value="Meio Periodo">Meio Período</option>
        <option value="integral">Integral</option>
      </select>
    </div>
    
    <label for="email">Email: </label>
    <input id="email" v-model="perfil.usuario.email" type="email" placeholder="Email">

    <label for="senha">Senha: </label>
    <input id="senha" v-model="perfil.usuario.senha" type="password" placeholder="Senha">

    <button @click="cadastrarPerfil()" type="button">Cadastrar</button>
    <a @click="voltar()" type="button" class="mt-5">Voltar</a>
  </form>
</template>


<script>
import { mapActions } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore'
import { useAlertaStore } from '../stores/alertaStore'

export default {
  data: () => ({
    perfil: {
      usuario: {},
    },
  }),
  methods: {
  ...mapActions(usePerfilStore, ['cadastrar']),
  ...mapActions(useAlertaStore, ['exibirSucesso', 'exibirErro']),
  cadastrarPerfil() {
    try {
      this.cadastrar(this.perfil);
      this.exibirSucesso("Perfil Cadastrado com sucesso!");
      this.$router.push({ name: 'Login' });
    } catch (error) {
      console.error(error);
      this.exibirErro(error.body.message);
    }
  },
  voltar() {
    // this.$router.go(-1);
    this.$router.push({ name: 'Login'});
  }
 }
}

</script>