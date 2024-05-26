<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header>
        <img src="Ruta para el logo" alt="Logo Colegio Filarmónico Jorge marioi Bergoglio">
        <h1> Colegio Filarmónico (opcional)</h1>
        
        <nav>
            <ul>
                <li><router-link to=#>Enlace 1</router-link></li>
                <li><router-link to="#">Enlace 2</router-link></li>
                    <ul>
                        <li><router-link to="#">Subenlace 1</router-link></li>
                        <li><router-link to="#">subenlace 2</router-link></li>
                    </ul>
                    <!--Desarrollar los demás enlaces desde aquí-->
            </ul>
        </nav>
    </header>
    <main>
        <section class="marquee">
            <!--Marquesina de las fotos del colegio-->
        </section>
        <div class="content">
            <aside>
                <ul>
                    <li><router-link to="#"><img src="imagen del link>" alt="nombre imagen">Link 1</router-link></li>
                    <li><router-link to="#"><img src="imagen del link2" alt="nombre imagen2">Link2</router-link></li>
                    <!--Agregar más enlaces-->
                </ul>
            </aside>
            <section>
                <article class="news">
                    <!--Informacione, etc.-->
                </article>
                <article class="calendar">
                    <!--Calendario institucional-->
                </article>
            </section>
        </div>
    </main>
    <footer>
        <p>marca registrada</p>
        <li><route-link to="#">Condiciones de uso</route-link></li>
        <li><route-link to="#">Tratamiento de datos</route-link></li>
        <li><router-link to="#">Políticas de privacidad</router-link></li>
    </footer>
</template>

<!--Definición del componente Vue-->
<script>
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    data(){
        return{
            //Define el estado del componente, si es necesario
        };
    },
    methods:{
        //Definir los métodos del componente.
    },
    mounted() {
        //Código que se ejecuta al montar el componente
    }
};
</script>

<!--Estilos de la hoja-->
<style scoped>
body{
    font-family: Arial, Helvetica, sans-serif, "Roboto";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header{
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

header img{
    max-width: 6.25rem;
    height: auto;
}
nav ul {
    list-style: none;
    padding: 1rem;
}
nav ul > li {
    display: inline-block;
    margin-right: 1rem;
}

nav ul > li:hover>ul{
    display: block;
    position: absolute;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

nav a {
    color: white;
    text-decoration: none;
}

main{
    width: 98%;
    margin: 0 auto;
    
}

.marquee {
    width: 99%;
    height: 2.5rem; /*40px */
    background-color: #f4f4f4;
    overflow: hidden;
    white-space: nowrap;
}

.content {
    display: flex;
    margin-top: 1rem;
}

aside {
    width: 30%;
    padding: 1rem;
    background-color: #f9f9f9;
}

aside ul {
    list-style: none;
    padding: 0;
}

aside li {
    margin-bottom: 1.5rem;
}
aside img {
    max-width: 25%;
    height: auto;
}

section {
    width: 70%;
    padding: 1rem;
}

article {
    width: 99%;
    margin-bottom: 1rem;
}

.news {
    height: 3.125rem; /*50px*/
    background-color: #e9e9e9;
}
.calendar {
    height: 2.5 rem; /*40 px */
    background-color: #d9d9d9;
}

footer {
    background-color: #333;
    color:white;
    padding: 1rem;
    text-align: center;
}
footer ul {
    list-style: none;
    padding: 0;
}

footer li {
    display: inline;
    margin-right: 1rem;
}
footer a {
    color: white;
    text-decoration: none;
}
</style>