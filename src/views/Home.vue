<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <header>
      <div class="logo">
        <img src="@/assets/images/Institucional/logoP.png" alt="Logo">
      </div>

      <v-app-bar app>
        <v-toolbar-title>Menu</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>
          <router-link to="#">Enlace 1</router-link>
        </v-btn>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">Enlace 2</v-btn>
          </template>
          <v-list>
            <v-list-item>
              <router-link to="#">Subenlace 1</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="#">Subenlace 2</router-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </header>
    <main>
      <section class="marquee">
        <!-- Marquesina con fotos del colegio -->
      </section>
      <div class="content">
        <aside>
          <ul>
            <li><router-link to="#"><img src="path-to-image.jpg" alt="Link Image">Link 1</router-link></li>
            <li><router-link to="#"><img src="path-to-image.jpg" alt="Link Image">Link 2</router-link></li>
          </ul>
        </aside>
        <section>
          <article class="news">
            <!-- Informaciones, comunicados, fotos o videos -->
          </article>
          <article class="calendar">
            <!-- Calendario institucional -->
          </article>
        </section>
      </div>
    </main>
    <footer>
      <ul>
        <li><router-link to="#">Condiciones de uso</router-link></li>
        <li><router-link to="#">Tratamiento de datos</router-link></li>
        <li><router-link to="#">Política de privacidad</router-link></li>
      </ul>
    </footer>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data() {
    return {
      data: null,
      links: [
        { text: 'Home', url: '/' },
        { text: 'NotFound', url: '/NotFound' }
        // Aquí se agregan más enlaces
      ]
    };
  },
  computed: {
    ...mapGetters(['message'])
  },
  mounted() {
    this.$axios.get('') // Preguntar cómo determino ese endpoint
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    navigate(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-image: linear-gradient(to bottom, #6a1b05, #e0afa4);
  color: white;
  padding: 1rem;
  text-align: center;
}

header img {
  width: auto;
  max-width: 98%;
  height: auto;
}

.logo {
  width: 98%;
  height: auto;
  display: block;
  margin: 0 auto;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul>li {
  display: inline-block;
  margin-right: 1rem;
}

nav ul>li>ul {
  display: none;
}

nav ul>li:hover>ul {
  display: block;
  position: absolute;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

nav a {
  color: white;
  text-decoration: none;
}

main {
  width: 98%;
  margin: 0 auto;
}

.marquee {
  width: 99%;
  height: 2.5rem;
  /* 40px = 2.5rem */
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
  margin-bottom: 1rem;
}

aside img {
  max-width: 100%;
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
  height: 3.125rem;
  /* 50px = 3.125rem */
  background-color: #e9e9e9;
}

.calendar {
  height: 2.5rem;
  /* 40px = 2.5rem */
  background-color: #d9d9d9;
}

footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

footer ul {
  list-style: none;
  padding: 0;
}

footer ul>li {
  display: inline-block;
  margin-right: 1rem;
}

footer a {
  color: white;
  text-decoration: none;
}
</style>