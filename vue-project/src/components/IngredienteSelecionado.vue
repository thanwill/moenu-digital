<script lang="ts">
import Tag from './Tag.vue'
export default{
    name:"IngredienteSelecionado",
    components:{ Tag },
    props:{
        ingrediente : {type:String , required: true}
    },
    data(){
        return {
            selecionado: false
        }
    }
}
</script>

<template>
    <button
        class="ingrediente"
        v-on:click="selecionado = !selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>