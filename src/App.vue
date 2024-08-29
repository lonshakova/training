<template>
  <HeaderMenu />
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
export default {
  components:{
    HeaderMenu
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
#app{
  min-height: 100vh;
  background-color: #FFA3A5;
}
</style>