<script setup>
import Contador from './components/Contador.vue'

function receberValor(novoValor) {
  console.log('Novo valor do contador:', novoValor)
}
</script>

<template>
  <Contador
    :valor-inicial="5"
    @valor-alterado="receberValor"
  />
</template>