<template>
  <div class="main-content">
    <CipherInput />
  </div>
</template>

<script>
import CipherInput from "../components/CipherInput.vue";
export default {
  components:{
    CipherInput
  },
};
</script>

<style scoped>
.main-content{
  display: flex;
  justify-content: center;
}

</style>
