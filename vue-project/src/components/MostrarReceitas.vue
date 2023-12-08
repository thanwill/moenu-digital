<script setup lang="ts">

import BotaoPrincipal from './BotaoPrincipal.vue'



</script>

<template>
    <BotaoPrincipal message="Mostar ingredientes" @click="$emit('buscarReceitas')" />
</template>