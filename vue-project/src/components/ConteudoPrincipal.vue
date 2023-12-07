<script setup lang="ts">
import { ref } from 'vue'
import SelecionarIngredientes from './SelecionarIngredientes.vue'
import Tag from '@/components/Tag.vue'
import SuaLista from '@/components/SuaLista.vue'
import BotaoPrincipal from '@/components/BotaoPrincipal.vue'
import Rodape from '@/components/Rodape.vue'

const ingredientes = ref([] as string[])



function adicionarIngrediente(ingrediente: string) {
    ingredientes.value.push(ingrediente)
}
function removerIngrediente(ingrediente: string) {

    // cria uma variável que recebe o índice do ingrediente que será removido 
    const indice = ingredientes.value.indexOf(ingrediente)

    // remove o ingrediente do array 
    ingredientes.value.splice(indice, 1)
}

</script>

<template>
    <main class="conteudo-principal">
        <SuaLista :ingredientes="ingredientes" />
        <SelecionarIngredientes @adicionar-ingrediente="adicionarIngrediente" @remover-ingrediente="removerIngrediente" />
        <BotaoPrincipal :message="'Buscar receitas!'" />

    </main>
    <Rodape />
</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}



@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>