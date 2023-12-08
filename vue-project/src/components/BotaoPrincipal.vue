<script lang="ts">
import Tag from './Tag.vue'
export default {
    name: "IngredienteSelecionado",
    components: { Tag },
    props: {
        message: { type: String, required: true }
    }
}

</script>
<template>
    <button class="paragrafo-lg botao-principal">
        {{ message }}
    </button>
</template>

<style scoped>
.botao-principal {

    display: flex;
    width: 312px;
    height: 56px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 32px;
    background: var(--Coral, #F0633C);
    box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);

    color: var(--Creme, #FFFAF3);
    text-align: center;

    /* Paragraph Large Bold */
    font-family: Nunito Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    /* 33px */

    cursor: pointer;
    transition: filter 0.2s;
}
</style>