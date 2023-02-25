<template>
  <div 
    class="alerta-app" 
    :class="[{ erro: erro }, { aviso: aviso}, { info: info }, { sucesso: sucesso}]" 
    v-show="exibir"
  >
    <p>{{ mensagem }}</p>
    <button @click="fechar">Fechar</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useAlertaStore } from '../stores/alertaStore';

export default {
  computed: {
    ...mapState(useAlertaStore, [
      'exibir',
      'mensagem',
      'erro',
      'aviso',
      'info',
      'sucesso',
    ])
  },
  methods: {
    ...mapActions(useAlertaStore, [
      'fechar',
    ]),
  }
}
</script>

<style>

</style>