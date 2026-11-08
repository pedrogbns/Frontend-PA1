
<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  valorInicial: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['valorAlterado'])

const contador = ref(Math.max(0, props.valorInicial))

const parOuImpar = computed(() => {
  return contador.value % 2 === 0 ? 'Par' : 'Ímpar'
})

watch(contador, (novoValor) => {
  if (novoValor === 10) {
    alert('O contador chegou a 10!')
  }
})

function incrementar() {
  contador.value++
  emit('valorAlterado', contador.value)
}

function decrementar() {
  if (contador.value > 0) {
    contador.value--
    emit('valorAlterado', contador.value)
  }
}
</script>

<template>
  <section class="contador">
    <h1>Meu Contador Vue</h1>

<p>Valor atual:</p>

<p
  class="valor-contador"
  :class="contador % 2 === 0 ? 'par' : 'impar'"
>
  {{ contador }}
</p>

<p>O número é: {{ parOuImpar }}</p>

    <div class="botoes">
      <button @click="decrementar" :disabled="contador === 0">
        - Diminuir
      </button>

      <button @click="incrementar">
        + Aumentar
      </button>
    </div>
  </section>
</template>

<style scoped>
.contador {
  text-align: center;
  padding: 30px;
}

h1 {
  color: #1565c0;
}

.botoes {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
}

button:hover:not(:disabled) {
  background-color: #0d47a1;
}

button:disabled {
  background-color: #b0bec5;
  cursor: not-allowed;
}

.valor-contador {
  font-size: 64px;
  font-weight: bold;
  margin: 10px 0;
  transition: color 0.3s ease;
}

.par {
  color: #2e7d32;
}

.impar {
  color: #1565c0;
}
</style>
