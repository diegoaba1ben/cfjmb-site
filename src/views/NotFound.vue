<!--Plantilla html-->
<template>
    <v-container>
        <v-row class="fill-heigt" align="center" justyfy="center">
            <v-col class="text-center">
                <h1>404 - PÁGINA NO ENCONTRADA</h1>
                <p>Lo sentimos, la página que buscas no existe</p>
                <v-btn color="primary" @click="goHome">Volver a inicio</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<!--Scripts de Vue para el elemento-->
<script>
export default {
    name: 'NotFound',
    methods: {
        goHome(){
            this.$router.push('/')
        }
    }
}
</script>

<!--Estilos-->
<style scoped>
h1 {
    color: red;
}
</style>