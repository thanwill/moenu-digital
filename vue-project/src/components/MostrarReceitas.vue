<script setup lang="ts">

import BotaoPrincipal from './BotaoPrincipal.vue'
import { ref } from 'vue'
import { obterReceitas } from '@/services/index'
import type IReceita from '@/interface/IReceita'
import CardReceitas from './CardReceitas.vue'


const receitas = ref([] as IReceita[])

async function buscarReceitas() {
    receitas.value = await obterReceitas()
}
buscarReceitas()


</script>

<template>
    <ul class="receitas">
      <li v-for="receita in receitas" :key="receita.nome">
        <CardReceitas :receita="receita" />
      </li>
    </ul>
    
    <BotaoPrincipal message="Mostar ingredientes" @click="$emit('buscarReceitas')" />
</template>

<style scoped>
.receitas {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
</style>