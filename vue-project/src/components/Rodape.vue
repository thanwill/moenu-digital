<template>
    <footer class="rodape paragrafo">
        <p>Desenvolvido por Alura | 2023 - Projeto fictício sem fins comerciais.</p>
    </footer>
</template>
  
<style scoped>
.rodape {
    background: var(--verde-escuro, #263A29);
    padding: 1.5rem 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--Creme, #FFFAF3);
    text-align: center;

    /* Paragraph */
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 27px */
}

.rodape a {
    color: var(--Creme, #FFFAF3);
    text-decoration: none;
}

@media only screen and (max-width: 1300px) {
    .rodape {
        padding: 1.5rem 3.75rem;
    }
}

@media only screen and (max-width: 767px) {
    .rodape {
        padding: 1.5rem;
    }
}
</style>
  