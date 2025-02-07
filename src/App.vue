<template>
  <div id="app">
      <HeaderMenu />
      <div class="main-content">
        <router-view/>
      </div>
    </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
export default {
  components:{
    HeaderMenu
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  --main-bg-color: #DAE3E5;
  --header-bg-color: #04080F;
  --btn-header-color: #A1C6EA;
  --center-bg-color: #A1C6EA;
  --article-bg-color: #A1C6EA;
  --main-text-color: #04080F;
  --input-bg-color: rgb(203, 227, 255);
  --new-text-bg-color: rgb(203, 227, 255);
}
#app{
  background-color: var(--main-bg-color);
  width: 100vw;
  min-height: 100vh;
  max-height: fit-content;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content {
  width: 60vw;
  min-height: 90vh;
  background-color: var(--center-bg-color);
}
</style>