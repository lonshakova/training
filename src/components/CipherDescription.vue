<template>
  <div class="cipher">
    <h2 class="title" @click="$router.push(cipher.altTitle)">
      {{ cipher.title }}
    </h2>
    <p class="description">
      {{ cipher.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    cipher: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.cipher {
  margin: 40px;
  padding: 10px;
  background: var(--article-bg-color);
  color: var(--main-text-color);
  border-radius: 10px;
  box-shadow: 0 0 10px 10px var(--article-bg-color);
}

.title {
  cursor: pointer;
}

.description {
  padding-left: 10px;
  cursor: default;
}

.divider {
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
}
</style>
