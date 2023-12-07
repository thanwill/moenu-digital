<script lang="ts">
import type ICategoria from '@/interface/ICategoria';
import type { PropType } from 'vue';

export default {
    name:"CardCategoria",
    props: {
        categoria: {type: Object as PropType<ICategoria>, required: true} 
            // define o tipo de categoria que será importada, através da Interface criada para os objetos.
    }
}
</script>

<template >
    {{ categoria.nome }}
</template>